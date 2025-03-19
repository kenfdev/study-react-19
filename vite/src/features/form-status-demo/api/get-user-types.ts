export async function getUserTypes(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('getting user types');
      resolve(['user', 'admin']);
    }, 2000);
  });
}
