import { Link } from 'waku';

import { Counter } from '../components/counter';
import { Suspense } from 'react';

export default async function HomePage() {
  const dataPromise = getData();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Counter dataPromise={dataPromise} />
      </Suspense>
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
    </div>
  );
}

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
