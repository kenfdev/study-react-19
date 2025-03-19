// Dummy post data

import { PostListItem } from './post-list-item';
import { Post } from './model';
import { use } from 'react';
export function PostList({ postsPromise }: { postsPromise: Promise<Post[]> }) {
  const posts = use(postsPromise);
  return (
    <div className="post-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
}
