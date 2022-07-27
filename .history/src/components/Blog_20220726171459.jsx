import React from 'react'
import styled from 'styled-components';
import play from "../assets/play.png"
import home from "../assets/home.png"
import Title from './Title';

const Blog = () => {
   const blogsData=
   [
    {
    title:"PARLOUR JOURNAL",
    type: "SPA",
    description: "Our blog is intended to help answer your hair related questions and provide information about healthy hair choices and products.",
  },
  {
    title:"REFELXOLOGY SKY",
    type: "Relax",
    description: "Reflexologists believe that these reflex points, pressing them creates real benefits for the person's health. If you have any questions, please email",
  },
  {
    title:"MEDITATION SUN",
    type: "Yoga",
    description: "Keep your body and mind it pure and clean for the soul to reside in. Our Spa Offer yoga classes in areas. creates real benefits for the person's health.",
  },
]
  return (
    <Section id="blog"> 
    <Title value="Blog"/>
   <div className="blogs">
   {blogsData.map(({title,type,desc})=>{
    <div className="blog" >
    <div className="image"></div>
    <div className="title">
      <h3>{title}</h3>  
    </div>
      <span className="type">{type}</span>
      <div className="description">
        <p>{desc}</p>  
      </div>
      <div className="more">
        <img src={play} alt="Play" />
        <span>Read More</span>  
      </div>
  </div>
  }
  )}
</div>
</Section>
)}
  
const Section=styled.section`
min-height:100vh;
position:realtive;
.blogs{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 5rem 15rem;
}



`;
export default Blog