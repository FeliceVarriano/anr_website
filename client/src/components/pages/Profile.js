import React, { useEffect, useState } from "react";
import YoutubeEmbed from "../YoutubeEmbed";
import styled from "styled-components";
import Axios from "axios";

function Profile() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response.data[0].livestreamUrl);
      setUrl(response.data[0].livestreamUrl);
    });
  }, []);

  return (
    <>
      <LivestreamWrapper>
        <pre>
          <YoutubeEmbed embedId={url} />
        </pre>
      </LivestreamWrapper>
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
