import { format } from 'date-fns';
import GithubSlugger from 'github-slugger';
import { calculateReadingTime, getWordCount } from './utils';

export function formatPostDate(dateString: string, pattern: string = 'MMM d, yyyy') {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return format(date, pattern);
}

export function getReadingStats(content?: string) {
  const wordCount = content ? getWordCount(content) : 0;
  return {
    wordCount,
    readingTime: calculateReadingTime(wordCount),
  };
}

export type HeadingItem = {
  id: string;
  text: string;
  level: number;
};

export function cleanHeadingText(raw: string) {
  return raw
    .replace(/`/g, '')
    .replace(/\[(.*?)]\((.*?)\)/g, '$1')
    .replace(/<\/?[^>]+(>|$)/g, '') // strip any inline HTML tags
    .replace(/#+$/, '') // remove trailing hashes in markdown headings
    .trim();
}

export function createSlugger() {
  const slugger = new GithubSlugger();
  slugger.reset();
  return slugger;
}

export function slugifyHeading(text: string, slugger = createSlugger()) {
  return slugger.slug(cleanHeadingText(text));
}

export function extractHeadings(markdown: string, minLevel = 2, maxLevel = 4): HeadingItem[] {
  const slugger = createSlugger();
  const headings: HeadingItem[] = [];

  markdown.split('\n').forEach((line) => {
    const match = /^(#{1,6})\s+(.*)/.exec(line);
    if (!match) return;

    const level = match[1].length;
    if (level < minLevel || level > maxLevel) return;

    const text = cleanHeadingText(match[2]);
    const id = slugger.slug(text);
    headings.push({ id, text, level });
  });

  return headings;
}
