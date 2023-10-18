import React, { ReactNode } from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { useIsAuthenticated } from '@azure/msal-react';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

interface PageLayoutProps {
  children: ReactNode;
}

/**
 * Renders the navbar component with a sign in or sign out button depending on whether or not a user is authenticated
 */
export function PageLayout(props: PageLayoutProps): JSX.Element {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar bg="primary" variant="dark" className="navbarStyle">
        <a className="navbar-brand" href="/">
          Using Microsoft Identity Platform
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </div>
      </Navbar>
      <br />
      <br />
      <h5>
        <center>Welcome to the Microsoft Authentication Library app</center>
      </h5>
      <br />
      <br />
      {props.children}
    </>
  );
}
