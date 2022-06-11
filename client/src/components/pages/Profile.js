import React, { useEffect, useState } from "react";
import YoutubeEmbed from "../YoutubeEmbed";
import styled from "styled-components";
import { db } from "../../firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";

function Profile() {
  const [url, setUrl] = useState("");
  const livestreamCollectionRef = collection(db, "livestreams");

  useEffect(() => {
    const loadUrl = async () => {
      // Axios.get("http://localhost:3001/api/get").then((response) => {
      //   console.log(response.data[0].livestreamUrl);
      //   setUrl(response.data[0].livestreamUrl);
      // });
      const data = await getDocs(livestreamCollectionRef);
      console.log("data");
      const livestreams = data.docs.map((ls) => ({ ...ls.data() }));
      setUrl(livestreams[0]["livestreamUrl"]);
    };
    loadUrl();
  }, []);

  return url ? (
    <>
      <a
        class="btn--outline-dark"
        href="https://stmaryscathedral.ca/mass-on-livestream/"
        style=""
      >
        St. Mary's Mass Livestream
      </a>
      <LivestreamWrapper>
        <pre>
          <YoutubeEmbed embedId={url} />
        </pre>
      </LivestreamWrapper>
    </>
  ) : (
    <>
      <span>Loading...</span>
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
