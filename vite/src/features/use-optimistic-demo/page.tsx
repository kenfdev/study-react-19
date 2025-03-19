import { getPosts } from './api/get-posts';
import { PostList } from './post-list';
import { Suspense } from 'react';
export function OptimisticDemoPage() {
  const postsPromise = getPosts();
  return (
    <div>
      <h1>Optimistic Demo</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList postsPromise={postsPromise} />
      </Suspense>
    </div>
  );
}
