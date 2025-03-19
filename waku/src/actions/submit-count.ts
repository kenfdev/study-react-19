'use server';

export async function submitCount(count: number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('submitCount', count);
  return { success: true };
}
