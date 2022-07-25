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
background: url(${home}) no-repeat center;
min-height:100vh;
background-size:cover;
pos

`;

export default Home