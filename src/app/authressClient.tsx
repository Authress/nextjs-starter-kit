import { LoginClient } from '@authress/login';

let loginClient: LoginClient | null;
try {
  loginClient = new LoginClient({
    // app_default is the default Authress created application.
    // * Configure the default Authress application at https://authress.io/app/#/settings?focus=applications&applicationId=app_default
    // * Create a new application at https://authress.io/app/#/settings?focus=applications
    // * Or Create an application using the quick setup flow: https://authress.io/app/#/settings?focus=quick&flow=authentication
    applicationId: 'app_default',

    // Create a custom domain: https://authress.io/app/#/settings?focus=domain (https://authress.company.com)
    // * OR use the default one for your account: https://authress.io/app/#/api?route=overview (https://ACCOUNT_ID.login.authress.io)
    authressApiUrl: '',
  });

  loginClient!.userSessionExists().then(userIsLoggedIn => {
    cachedUserIsCurrentlyLoggedIn = userIsLoggedIn;
  });
} catch (error) {
  loginClient = null;
  console.error(error);
}

export const authressLoginClient = loginClient;

let cachedUserIsCurrentlyLoggedIn = false;
export function userIsCurrentlyLoggedIn() {
  if (!loginClient) { return false; }
  loginClient!.userSessionExists().then(userIsLoggedIn => {
    cachedUserIsCurrentlyLoggedIn = userIsLoggedIn;
  });
  return cachedUserIsCurrentlyLoggedIn;
}

export async function login() {
  console.log('Logging the user in');

  if (!loginClient) {
    throw Error('The Authress configuration in src/app/authressClient.tsx is not correctly configured.');
  }

  await loginClient.authenticate({});
}
  
export async function logout() {
  if (!loginClient) { return false; }
  
  console.log('Logging out');
  
  await loginClient!.logout(window.location.href);
  window.location.reload();
}
  
export async function makeApiCallWithUserToken() {
  const userAccessToken = await loginClient!.ensureToken({});
  try {
    const result = await fetch('http://localhost:8080/api/endpoint', {
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
      },
    });
    console.log('API Call request', result);
  } catch (error) {
    console.error('Error calling API', error);
  }
}

