import { getPostsFromCache } from '@/lib/notion';
import BlogClientContent from '@/components/blog/blog-client-content';

export default async function BlogPage() {
  const posts = getPostsFromCache();
  return <BlogClientContent posts={posts} />;
}
