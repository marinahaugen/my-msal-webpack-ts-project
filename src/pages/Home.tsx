import { AuthenticatedTemplate } from '@azure/msal-react';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/about-me">About me</Link>
        </li>
        <li>
          <Link to="/value-proposition">Value Proposition</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>

        <AuthenticatedTemplate>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </AuthenticatedTemplate>
      </ul>
    </Container>
  );
}
