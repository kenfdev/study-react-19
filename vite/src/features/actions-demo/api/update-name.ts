export async function updateName(name: string): Promise<string | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (name === 'error') {
        resolve('error');
      } else {
        resolve(null);
      }
    }, 1000);
  });
}
