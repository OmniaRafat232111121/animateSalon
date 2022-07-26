import React from 'react'
import milestone1 from "../assets/milestone1.png";
import milestone2 from "../assets/milestone2.png";
import milestone3 from "../assets/milestone3.png";
import milestoneBackground from "../assets/milestone-background.png";
import styled from "styled-components";
const Milestones = () => {
  const milestone=[
    {
      image:milestone1,
      data:"Client Served",
      amount:"877"
    },{
      image: milestone2,
      data: "of raw data",
      amount: "1.4M",
    },{
      image: milestone3,
      data: "Reviews",
      amount: "5.4K",
    }
  ];
  return (
    <Section >
    <div className="background">
    <img src={milestoneBackground} alt="Milestoe Background"/>
    </div>
  <div className="milestones">
  {
    milestone.map(({image,data,amount})=>{
      return(
        <div className="milestone">
        <p>{amount}</p>
      <span>{data}</span>
      <img src={image} alt="milestone"/>
        </div>
      )
    })
  }
  </div>

    </Section>
  )
}

const Section=styled.section`
height:100vh;
background-color:var(--primary-color);
padding:0 10rem;
position:relative;
 .background{
  position:absolute;
  left:0;
  
 }
`;
export default Milestones