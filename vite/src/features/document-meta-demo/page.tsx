export function DocumentMetaDemoPage() {
  const post = {
    title: 'My Post',
    keywords: 'react, meta, demo',
  };
  return (
    <div>
      <h1>Document Meta Demo</h1>
      <title>{post.title}</title>
      <meta name="author" content="Josh" />
      <link rel="author" href="https://twitter.com/joshcstory/" />
      <meta name="keywords" content={post.keywords} />
    </div>
  );
}
