import { getCollection } from "astro:content";

export async function getAllPosts() {
  const ENTRY = "blog";

  const posts = await getCollection(ENTRY);

  return posts;
}
