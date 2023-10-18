/**
 * Renders a sign out button
 */

import { useMsal } from '@azure/msal-react';
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export function SignOutButton(): JSX.Element {
  const { instance } = useMsal();

  const handleLogout = (logoutType: string) => {
    localStorage.removeItem('internalUser');
    if (logoutType === 'popup') {
      instance.logoutPopup({
        postLogoutRedirectUri: '/',
        mainWindowRedirectUri: '/',
      });
    } else if (logoutType === 'redirect') {
      instance.logoutRedirect({
        postLogoutRedirectUri: '/',
      });
    }
  };
  return (
    <DropdownButton
      variant="secondary"
      className="ml-auto"
      drop="start"
      title="Sign Out"
    >
      <Dropdown.Item as="button" onClick={() => handleLogout('popup')}>
        Sign out using Popup
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleLogout('redirect')}>
        Sign out using Redirect
      </Dropdown.Item>
    </DropdownButton>
  );
}
