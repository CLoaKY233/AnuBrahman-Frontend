import {
  PageObjectResponse,
  DatabaseObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import fs from 'fs';
import path from 'path';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  notionVersion: '2025-09-03',
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

export interface Post {
  id: string;
  title: string;
  slug: string;
  coverImage?: string;
  description: string;
  date: string;
  content: string;
  author?: string;
  tags?: string[];
  category?: string;
  featured?: boolean;
}

interface NotionTitleProperty {
  title: Array<{ plain_text: string }>;
}

interface NotionRichTextProperty {
  rich_text: Array<{ plain_text: string }>;
}

interface NotionSelectProperty {
  select: { name: string } | null;
}

interface NotionMultiSelectProperty {
  multi_select: Array<{ name: string }>;
}

interface NotionDateProperty {
  date: { start: string; end?: string } | null;
}

interface NotionUrlProperty {
  url: string | null;
}

interface NotionCheckboxProperty {
  checkbox: boolean;
}

interface NotionPageProperties {
  Title?: NotionTitleProperty;
  Slug?: NotionRichTextProperty;
  'Cover Image'?: NotionUrlProperty;
  'Featured Image'?: NotionUrlProperty;
  'Published Date'?: NotionDateProperty;
  Author?: NotionRichTextProperty;
  Category?: NotionSelectProperty;
  Tags?: NotionMultiSelectProperty;
  Status?: NotionSelectProperty;
  Featured?: NotionCheckboxProperty;
}

type DatabaseWithOptionalDataSources = Omit<DatabaseObjectResponse, 'data_sources'> & {
  data_sources?: DatabaseObjectResponse['data_sources'];
};

export async function getDatabaseStructure() {
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID is not set');
  }

  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  return database;
}

export function getPostsFromCache(): Post[] {
  const cachePath = path.join(process.cwd(), 'posts-cache.json');
  if (fs.existsSync(cachePath)) {
    try {
      const cache = fs.readFileSync(cachePath, 'utf-8');
      const posts = JSON.parse(cache) as Post[];
      return posts.filter(
        (post) =>
          post.id && post.title && post.slug && post.description && post.date && post.content
      );
    } catch (error) {
      console.error('Error reading posts cache:', error);
      return [];
    }
  }
  return [];
}

/**
 * Get featured posts from cache
 * @param limit Maximum number of featured posts to return (default: 5)
 * @returns Array of featured posts, sorted by date (newest first)
 * @throws Error if fewer than 3 featured posts are available
 */
export function getFeaturedPostsFromCache(limit: number = 5): Post[] {
  try {
    const posts = getPostsFromCache();

    // Filter only featured posts
    const featuredPosts = posts.filter((post) => post.featured === true);

    // Failsafe: Log warning if fewer than 3 featured posts
    if (featuredPosts.length < 3) {
      console.warn(
        `⚠️ Found only ${featuredPosts.length} featured posts. Consider marking at least 3-5 posts as featured in Notion for better homepage display.`
      );
    }

    // Sort by date (newest first) and limit results
    return featuredPosts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  } catch (error) {
    console.error('Error getting featured posts:', error);
    return [];
  }
}

export async function fetchPublishedPosts() {
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID is not set');
  }

  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const dataSourceId = (database as DatabaseWithOptionalDataSources).data_sources?.[0]?.id;

  if (!dataSourceId) {
    throw new Error('No data source found in database');
  }

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      and: [
        {
          property: 'Status',
          status: {
            equals: 'Published',
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Published Date',
        direction: 'descending',
      },
    ],
  });

  return response.results as PageObjectResponse[];
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = getPostsFromCache();
  const post = posts.find((p) => p.slug === slug);
  return post || null;
}

export async function getPostFromNotion(pageId: string): Promise<Post | null> {
  try {
    const page = (await notion.pages.retrieve({
      page_id: pageId,
    })) as PageObjectResponse;

    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const { parent: contentString } = n2m.toMarkdownString(mdBlocks);

    // Get first paragraph for description (excluding empty lines)
    const paragraphs = contentString.split('\n').filter((line: string) => line.trim().length > 0);
    const firstParagraph = paragraphs[0] || '';
    const description = firstParagraph.slice(0, 160) + (firstParagraph.length > 160 ? '...' : '');

    const properties = page.properties as NotionPageProperties;

    // Extract title with fallback
    const titleText = properties.Title?.title[0]?.plain_text || 'Untitled';

    // Generate slug from title if not explicitly set
    const slug =
      properties.Slug?.rich_text[0]?.plain_text ||
      titleText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    // Extract cover image with multiple fallbacks
    let coverImage: string | undefined;
    if (page.cover?.type === 'external') {
      coverImage = page.cover.external.url;
    } else if (page.cover?.type === 'file') {
      coverImage = page.cover.file.url;
    } else if (properties['Cover Image']?.url) {
      coverImage = properties['Cover Image'].url;
    } else if (properties['Featured Image']?.url) {
      coverImage = properties['Featured Image'].url;
    }

    // Extract featured checkbox (default to false if not set)
    const featured = properties.Featured?.checkbox ?? false;

    // Extract author from rich text (stored as a plain string)
    const authorText = properties.Author?.rich_text
      ?.map((segment) => segment.plain_text)
      .join(' ')
      .trim();

    const post: Post = {
      id: page.id,
      title: titleText,
      slug,
      coverImage,
      description,
      date: properties['Published Date']?.date?.start || new Date().toISOString(),
      content: contentString,
      author: authorText || undefined,
      tags: properties.Tags?.multi_select?.map((tag) => tag.name) || [],
      category: properties.Category?.select?.name,
      featured,
    };

    return post;
  } catch (error) {
    console.error(`Error getting post from Notion (${pageId}):`, error);
    return null;
  }
}
