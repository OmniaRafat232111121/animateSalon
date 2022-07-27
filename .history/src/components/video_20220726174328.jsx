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
          src="https://www.youtube.com/embed/2ffOXOfZzn0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
</Section>
  )
}
const Section=styled.section `

`;

export default video