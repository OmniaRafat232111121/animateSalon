import React from 'react'
import styled from "styled-components";

const video = () => {

  return (
   <Section>
<div className="background"></div>
<div className="video">
</div>
<iframe
          width="960"
          height="515"
          src="https://www.youtube.com/watch?v=2Gg6Seob5Mg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
</Section>
  )
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

export default video