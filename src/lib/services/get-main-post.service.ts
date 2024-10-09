import { getAllPosts } from './get-all-posts.service'

export async function getMainPost() {
  const all = await getAllPosts()
  return all.find((post) => post.data.tags.includes('main'))
}
