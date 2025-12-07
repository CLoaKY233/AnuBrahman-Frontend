import type { Post } from '@/lib/notion';

export type CardViewMode = 'detailed' | 'compact';

export interface BlogCardProps {
  post: Post;
  isCompact?: boolean;
}

export interface BlogClientContentProps {
  posts: Post[];
}
