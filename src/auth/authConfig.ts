import { Configuration, RedirectRequest } from '@azure/msal-browser';
import { LogLevel } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.AZURE_MSAL_CLIENT_ID || '',
    authority: `https://login.microsoftonline.com/${process.env.AZURE_MSAL_TENANT_ID}`,
    redirectUri: process.env.AZURE_MSAL_REDIRECT_URI,
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * Can also add this, domainHint: 'hotmail.com', but I need to make sure that I registered the app correctly
 */
export const loginRequest: RedirectRequest = {
  scopes: ['openid', 'profile', 'email'],
};
