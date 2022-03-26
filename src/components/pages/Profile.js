import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import YoutubeEmbed from "../YoutubeEmbed";
import axios from "axios";

function Profile() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  console.log({ user });

  async function callApi() {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("http://localhost:8080/protected", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      //console.log(token);
    } catch (error) {
      console.log(error);
    }
  }

  async function callApi2() {
    axios
      .get("http://localhost:8080/protected2")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
  }

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
        console.log("metadata");
        console.log(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={callApi}>Click for API</button>
        <JSONPretty data={user}></JSONPretty>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
        <YoutubeEmbed embedId="dQw4w9WgXcQ" />
      </div>
    )
  );
}

export default Profile;
