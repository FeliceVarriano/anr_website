import React from "react";
import YoutubeEmbed from "../YoutubeEmbed";
import styled from "styled-components";

function Profile() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  return (
    <>
      <button onClick={forceUpdate}>Force re-render</button>
      <LivestreamWrapper>
        <pre>
          <YoutubeEmbed embedId={process.env.REACT_APP_LIVESTREAM_URL} />
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
