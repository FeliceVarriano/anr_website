import React from "react";
import YoutubeEmbed from "../YoutubeEmbed";
import styled from "styled-components";

function Profile() {
  const url = process.env.REACT_APP_LIVESTREAM_URL;
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
