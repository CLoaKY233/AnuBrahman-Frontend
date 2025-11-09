import { fetchPublishedPosts, getPostFromNotion } from "@/lib/notion";
import fs from "fs";
import path from "path";
import { notion } from "../lib/notion";

// async function debugNotion() {
//   console.log("Testing Notion connection...");
//   console.log("Database ID:", process.env.NOTION_DATABASE_ID);

//   try {
//     // Try retrieving database metadata first
//     const db = await notion.databases.retrieve({
//       database_id: process.env.NOTION_DATABASE_ID!,
//     });
//     console.log("✅ Database found:", db);
//     console.log("Database title:", db.title);
//   } catch (error: any) {
//     console.error("❌ Database retrieve failed:", error.message);
//   }
// }

// debugNotion();

async function cachePosts() {
  try {
    console.log("Fetching posts from Notion...");
    const posts = await fetchPublishedPosts();

    const allPosts = [];

    for (const post of posts) {
      const postDetails = await getPostFromNotion(post.id);
      if (postDetails) {
        allPosts.push(postDetails);
      }
    }

    const cachePath = path.join(process.cwd(), "posts-cache.json");
    fs.writeFileSync(cachePath, JSON.stringify(allPosts, null, 2));

    console.log(`Successfully cached ${allPosts.length} posts.`);
  } catch (error) {
    console.error("Error caching posts:", error);
    process.exit(1);
  }
}

cachePosts();
