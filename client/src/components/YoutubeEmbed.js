import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <Iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;

const Iframe = styled.iframe`
  width: 1000px;
  height: 600px;
`;
