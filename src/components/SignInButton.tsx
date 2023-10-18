import { useMsal } from '@azure/msal-react';
import React from 'react';
import { loginRequest } from '../auth/authConfig';
import { Dropdown, DropdownButton } from 'react-bootstrap';

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export function SignInButton(): JSX.Element {
  const { instance } = useMsal();

  const handleLogin = (loginType: string) => {
    localStorage.setItem('internalUser', 'true');
    if (loginType === 'popup') {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    } else if (loginType === 'redirect') {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  };

  return (
    <DropdownButton
      variant="secondary"
      className="ml-auto"
      drop="start"
      title="Sign In"
    >
      <Dropdown.Item as="button" onClick={() => handleLogin('popup')}>
        Sign in using Popup
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleLogin('redirect')}>
        Sign in using Redirect
      </Dropdown.Item>
    </DropdownButton>
  );
}
