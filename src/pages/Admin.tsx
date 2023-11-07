import { AuthenticatedTemplate, useMsal } from '@azure/msal-react';
import React, { useState } from 'react';
import { ProfileData } from '../components/ProfileData';
import { Button, Container } from 'react-bootstrap';
import { callMsGraph } from '../graph';
import { loginRequest } from '../auth/authConfig';

export default function Admin() {
  /**
   * Renders information about the signed-in user or a button to retrieve data about the user
   */
  const ProfileContent = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    function RequestProfileData() {
      // Silently acquires an access token which is then attached to a request for MS Graph data
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          callMsGraph(response.accessToken).then((response) =>
            setGraphData(response),
          );
        });
    }

    return (
      <>
        <h5 className="card-title"> Welcome {accounts[0].name}</h5>
        <br />
        {graphData ? (
          <ProfileData graphData={graphData} />
        ) : (
          <Button variant="secondary" onClick={RequestProfileData}>
            Request Profile Information
          </Button>
        )}
      </>
    );
  };

  return (
    <Container>
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>
    </Container>
  );
}
