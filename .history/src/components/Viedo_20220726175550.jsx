import React from 'react';
import styled from "styled-components";


function Viedo() {

  return (
    <Section >
      <div className="background"></div>
      <div className="video"
     
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      >
      <iframe
          width="960"
          height="515"
          src="https://www.youtube.com/embed/2ffOXOfZzn0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </.div>
    </Section>
  );
}

const Section = styled.section`
background-color: #662d91aa;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
.video {
  z-index: 10;
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  height: 100%;
  padding: 6rem 2rem;
  .video {
    iframe {
      width: 80vw;
      height: 10rem;
    }
  }
}
`;

export default Viedo