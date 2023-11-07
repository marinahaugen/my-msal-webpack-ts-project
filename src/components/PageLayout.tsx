import React, { ReactNode } from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { useIsAuthenticated } from '@azure/msal-react';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';
import { Container } from 'react-bootstrap';

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
      <Navbar bg="dark" data-bs-theme="dark" className="navbarStyle">
        <Container>
          <a className="navbar-brand" href="/">
            Using Microsoft Identity Platform
          </a>
        </Container>
        <Container>
          <div className="collapse navbar-collapse justify-content-end">
            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
          </div>
        </Container>
      </Navbar>
      <br />
      <br />
      {props.children}
    </>
  );
}
