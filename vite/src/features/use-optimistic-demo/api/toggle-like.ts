import { Post } from '../model';
import { posts } from './data';

export async function toggleLike(
  postId: number,
  liked: boolean
): Promise<Post> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const updatedPost = posts.find((post) => post.id === postId);
      if (!updatedPost) {
        throw new Error('Post not found');
      }
      updatedPost.liked = !liked;
      resolve(updatedPost);
    }, 1000);
  });
}
