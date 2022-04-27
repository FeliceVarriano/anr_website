import React, { useEffect, useState } from "react";
import YoutubeEmbed from "../YoutubeEmbed";
import styled from "styled-components";
import Axios from "axios";
import { Button } from "../Button";

function Profile() {
  const [url, setUrl] = useState(loadUrl());

  function loadUrl() {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response.data[0].livestreamUrl);
      setUrl(response.data[0].livestreamUrl);
    });
  }

  return url ? (
    <>
      <a
        class="btn--outline-dark"
        href="https://stmaryscathedral.ca/mass-on-livestream/"
      >
        St. Mary's
      </a>
      <LivestreamWrapper>
        <pre>
          <YoutubeEmbed embedId={url} />
        </pre>
      </LivestreamWrapper>
    </>
  ) : (
    <>
      <span>No Livestream Currently, check back later...</span>
      <a
        class="btn--outline-dark"
        href="https://stmaryscathedral.ca/mass-on-livestream/"
      >
        St. Mary's
      </a>
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
