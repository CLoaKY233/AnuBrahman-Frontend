import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import fs from 'fs';
import path from 'path';

// Bun automatically loads .env files, so no need for dotenv
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  // Specify API version to use the new dataSources API
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
}

export async function getDatabaseStructure() {
  // databases.retrieve still works for getting database metadata
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID!,
  });
  console.log('returned');
  return database;
}

// FIX: Removed getWordCount from this file. It's now in lib/utils.ts.

export function getPostsFromCache(): Post[] {
  const cachePath = path.join(process.cwd(), 'posts-cache.json');
  if (fs.existsSync(cachePath)) {
    try {
      const cache = fs.readFileSync(cachePath, 'utf-8');
      return JSON.parse(cache);
    } catch (error) {
      console.error('Error reading posts cache:', error);
      return [];
    }
  }
  return [];
}

export async function fetchPublishedPosts() {
  // Get the database to extract data source ID
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  // Extract the first data source ID
  const dataSourceId = (database as any).data_sources?.[0]?.id;

  if (!dataSourceId) {
    throw new Error('No data source found in database');
  }

  // Query using data source ID
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

    const properties = page.properties as any;
    const post: Post = {
      id: page.id,
      title: properties.Title.title[0]?.plain_text || 'Untitled',
      slug:
        properties.Title.title[0]?.plain_text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '') || 'untitled',
      coverImage:
        page.cover?.type === 'external'
          ? page.cover.external.url
          : page.cover?.type === 'file'
            ? page.cover.file.url
            : properties['Featured Image']?.url || undefined,
      description,
      date: properties['Published Date']?.date?.start || new Date().toISOString(),
      content: contentString,
      author: properties.Author?.people[0]?.name,
      tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      category: properties.Category?.select?.name,
    };

    return post;
  } catch (error) {
    console.error('Error getting post:', error);
    return null;
  }
}
