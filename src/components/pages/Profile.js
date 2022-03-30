import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import YoutubeEmbed from "../YoutubeEmbed";
import Footer from "../Footer";
import styled from "styled-components";

function Profile() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  console.log({ user });

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-6pfso-t4.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <>
      {/* <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p> */}
      <LivestreamWrapper>
        {userMetadata ? (
          <pre>
            <YoutubeEmbed embedId={userMetadata.livestream_url} />
          </pre>
        ) : (
          "No livestream currently"
        )}
      </LivestreamWrapper>
      <Footer />
    </>
  );
}

export default Profile;

const LivestreamWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 61em;
  padding: 0 20px;
`;
