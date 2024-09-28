// importing from next-auth/react instead of our root's auth.ts because of Client & Server component issues.
// https://authjs.dev/getting-started/session-management/login
import { signIn } from 'next-auth/react';

export function SignInButton() {
  return (
    <button
      onClick={() =>
        signIn('google', {
          callbackUrl: `https://www.google.com/`,
        })
      }
    >
      Sign In Google
    </button>
  );
}
