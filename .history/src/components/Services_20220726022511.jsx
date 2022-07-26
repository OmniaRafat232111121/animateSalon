import React from 'react'
import styled from 'styled-components'
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"
import play from '../assets/play.png'
import Title from './Title'

const Services = () => {
  const data = [
    {
      type: "Blowout",
      text: "Shampoo and blow dry. If you are looking to celebrate your special day with us, please note we only have 3 stylists scheduled",
      image: service1,
    },
    {
      type: "Olaplex",
      text: "Hair treatment helping keep coloured hair healthy from the inside If you are looking to celebrate your special day with us.",
      image: service2,
    },
    {
      type: "Retouch",
      text: "We bring to you a bouquet of services to remain worry free about your looks. We have made effortless beauty equipment and products.",
      image: service3,
    },
  ];
  return (
<section id="services">
<Title value="services"/>
{
  
}

</section>
  )
}

export default Services