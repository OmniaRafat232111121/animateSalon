import React from 'react'
import styled from "styled-components"
import home from "../assets/home.png";
import Play from "../assets/play.png";
import Navbar from './Navbar';
const Home = () => {
  return (
    <Section id="home">
    <Navbar/>
    </Section>
  )
}
const Section=styled.section`
background: url(${home});
min-height:100vh;
ba

`;

export default Home