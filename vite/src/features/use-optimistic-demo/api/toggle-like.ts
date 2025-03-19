import { Post } from '../model';
import { posts } from './data';

export async function toggleLike(
  postId: number,
  liked: boolean
): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const updatedPost = posts.find((post) => post.id === postId);
      if (!updatedPost) {
        reject(new Error('Error toggling like'));
        return;
      }
      if (updatedPost.id === 2) {
        reject(new Error('Error toggling like'));
        return;
      }
      resolve({ ...updatedPost, liked: !liked });
    }, 1000);
  });
}
