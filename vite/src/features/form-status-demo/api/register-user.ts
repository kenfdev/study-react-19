export async function registerUser(
  name: string,
  email: string,
  userType: string
): Promise<{
  name: string;
  email: string;
  success: boolean;
  userType: string;
} | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (name === 'error') {
        resolve({ name: 'error', email: 'error', success: false, userType });
      } else {
        resolve({ name, email, success: true, userType });
      }
    }, 5000);
  });
}
