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
          src="https://th.bing.com/th/id/R.72afb9506fcca05518616d8a76a2e573?rik=xHzZ9N4qqVyUbQ&riu=http%3a%2f%2fwww.bandt.com.au%2finformation%2fuploads%2f2015%2f09%2fgetty3.jpg&ehk=1QxAcaw8OTkLxCCclcoAuHuJ2XhuMaSGC4Ms8PIFI0M%3d&risl=&pid=ImgRaw&r=0"
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