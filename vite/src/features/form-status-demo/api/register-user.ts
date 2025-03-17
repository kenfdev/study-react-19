export async function registerUser(
  name: string,
  email: string
): Promise<{ name: string; email: string; success: boolean } | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (name === 'error') {
        resolve({ name: 'error', email: 'error', success: false });
      } else {
        resolve({ name, email, success: true });
      }
    }, 5000);
  });
}
