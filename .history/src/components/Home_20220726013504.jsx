import React from 'react'
import styled from "styled-components"
import home from "../assets/home.png";
import play from "../assets/play.png";
import Navbar from './Navbar';
const Home = () => {
  return (
    <Section id="home">
    <Navbar/>
    <div className="home">
    <div className="content">
    <div classname="title">
    <h1>Blossoms Parlour</h1>
    </div>
    <div className="subTitle">
            <p>
              At the Beauty Parlour, we believe in beauty with a conscience. 
              We have created a salon that offers the highest quality hair 
              services.
            </p>  
          </div>
      <img src={play} alt="playButton"/>
    </div>
    </div>

    <div className="info">
    <div>
    </div>
    </div>
    </Section>
  )
}
const Section=styled.section`
background: url(${home}) no-repeat center;
min-height:100vh;
background-size:cover;
position:relative;
`;

export default Home