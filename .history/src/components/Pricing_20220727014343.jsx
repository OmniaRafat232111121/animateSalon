import React from 'react'
import styled from 'styled-components'
import Title from './Title';
import pricing1 from "../assets/pricing1.png";
import pricing2 from "../assets/pricing2.png";
const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: 13,
    },
    {
      name: "Pro",
      price: 35,
    },
    {
      name: "Expert",
      price: 77,
    },
  ];

  const data = [
    {
      value: "Full face Rs.250",
      type: "Basic",
    },
    {
      value: "Cheeks Rs. 90",
      type: "Basic",
    },
    {
      value: "Jawline Rs.50",
      type: "Basic",
    },
    {
      value: "Lower Lip Rs.50",
      type: "Basic",
    },
    {
      value: "Upper Lip Rs.50",
      type: "Basic",
    },
    {
      value: "Under arms Rs.100",
      type: "Basic",
    },
    {
      value: "Full Legs Rs.450",
      type: "Pro",
    },
    {
      value: "Half Legs Rs.300",
      type: "Pro",
    },
    {
      value: "Daily Backups",
      type: "Expert",
    },
    {
      value: "One Click Setup",
      type: "Expert",
    },
  ]
  return (
    <Section>
    <Title value="pricing"/>
    <div className="background">
    <img src={pricing1} alt="background"/>
    <img src={pricing2} alt="background"/>
    </div>
   <div className="pricing__title">
   <p>Find Your Pr</p>

   </div>

    </Section>
  )
}

const Section=styled.components`


`
export default Pricing