import React from 'react'
import styled from "styled-components"
import home from "../assets/home.png";
import play from "../assets/play.png";
import Navbar from './Navbar';
import App from "./App."
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
    <div className="grid">
            <div className="col">
                <strong>Parlour</strong>
                <p>Blossoms Academy</p>
            </div>
            <div className="col">
                <strong>Email</strong>
                <p>blossoms@gmail.com</p>
            </div> 
            <div className="col">
                <strong>Mobile</strong>
                <p>+91 8897666511</p>
            </div> 
            <div className="col">
                <strong>Address</strong>
                <p>322, Long Fly,</p>
                <p>997773 India</p>
            </div> 
            <div className="col">
                <strong>Services</strong>
                <p>Sparking</p>
                <p>SPA Cream</p>
            </div> 
            <div className="col">
                <strong>Working Hours</strong>
                <p>Monday to Friday</p>
                <p>08:00 to 09:00</p>
            </div>   
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
.home{
  height:100%;
  .content{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:60%;
    color:#fff;
    gap:1.2rem;
    margin-top:8rem;
    padding-left:18rem;
    .title{
      h1{
        font-size:5rem;
        line-height:5.3rem;
      }
    }
    .subTitle{
      p{
        width:70%;
        margin-bottom:2rem;
      }
    }
  .info{
    position:absolute;
    bottom:-6rem;
    right:0;
    background-color: var(--secondary-color);

  }
  }
}
`;

export default Home