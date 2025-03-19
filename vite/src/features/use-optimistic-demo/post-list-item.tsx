import { useActionState, useOptimistic } from 'react';
import { toggleLike } from './api/toggle-like';
import { Post } from './model';
export function PostListItem({ post }: { post: Post }) {
  const [updatedPost, submitAction, isPending] = useActionState<Post, FormData>(
    async (_previousPost, formData) => {
      const postId = Number(formData.get('postId'));
      const liked = formData.get('liked') === 'true';
      console.log('liked', liked);
      const optimistic = { ...optimisticPost, liked: !optimisticPost.liked };
      console.log('optimistic', optimistic);
      updateOptimisticPost(optimistic);
      const updatedPost = await toggleLike(postId, liked);
      return updatedPost;
    },
    post
  );
  const [optimisticPost, updateOptimisticPost] = useOptimistic(updatedPost);
  console.log('optimisticPost', optimisticPost);
  return (
    <div
      key={optimisticPost.id}
      className="post"
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '12px',
        marginBottom: '16px',
      }}
    >
      <p>{optimisticPost.content}</p>
      <form action={submitAction}>
        <input type="hidden" name="postId" value={optimisticPost.id} />
        <input
          type="hidden"
          name="liked"
          value={optimisticPost.liked.toString()}
        />
        <button
          type="submit"
          disabled={isPending}
          style={{
            background: 'none',
            border: 'none',
            cursor: isPending ? 'not-allowed' : 'pointer',
            fontSize: '1.5rem',
          }}
        >
          {optimisticPost.liked ? '❤️' : '🤍'}
        </button>
      </form>
    </div>
  );
}
