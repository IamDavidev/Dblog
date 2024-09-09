import { getCollection } from "astro:content";
import type { BlogPost } from "../../content/config";

export async function getMainPost() {
  const ENTRY = "blog";
  const posts = await getCollection(ENTRY);

  return posts.find((post) => post.data.tags.includes("main"));
}
