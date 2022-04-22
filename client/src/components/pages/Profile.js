import React from "react";
import YoutubeEmbed from "../YoutubeEmbed";
import styled from "styled-components";

function Profile() {
  // const mysql = require("mysql");
  // const db = mysql.createPool({
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_USER_PASSWORD,
  //   database: process.env.DB_DATABASE,
  // });

  // const sqlQuery = "SELECT * FROM `livestreams` WHERE `livestreamId` = 1";
  // let url = db.query(sqlQuery, (err, result) => {
  //   console.log(result);
  // });

  return (
    <>
      <LivestreamWrapper>
        <pre>{/* <YoutubeEmbed embedId={url} /> */}</pre>
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
