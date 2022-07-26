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
  bottom:-10%;
    img{
      height:50rem;
      z-index:1000;
    }
 }
.milestones{
display:grid;
grid-template-columns:repeat(3,1fr);
color:#fff;
align-items:center;
height:100%;
 .milestone{
  z-index:1000;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  p{
    font-size:5rem;
    font-weight:bolder;
    line-height:3rem;
  }
  span{
    text-transform:uppercase;
    color:#ffff;
  }
  .img{
    height:10rem;
  }
 }
 }
@media screen and(min-width:230px) and (max-width:1080px) {
  padding:5rem 2rem;
  height:100%;
  min-height:100ch;
  .background{
    
    

  }
  
  .milestones {
    grid-template-columns: 1fr;
    gap: 5rem;
    .milestone{
      display:grid;
    grid-template-columns:repeat(3,1fr);
    margin:30px;
    align-items:center;
    }
  }

  
}
`;
export default Milestones