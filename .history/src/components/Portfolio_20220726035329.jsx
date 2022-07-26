import React from 'react';
import styled from "styled-components";
import loadmore from "../assets/loadmore.png";
import portfolio3 from "../assets/portfolio3.jpg";
import portfolio4 from "../assets/portfolio4.jpg";
import portfolio5 from "../assets/portfolio5.jpg";
import portfolio6 from "../assets/portfolio6.jpg";
import portfolio7 from "../assets/portfolio7.jpg";
import portfolio8 from "../assets/portfolio8.jpg";
import portfolio9 from "../assets/portfolio9.jpg";
import portfolio10 from "../assets/portfolio10.jpg";
import { motion } from "framer-motion";

import { portfolioAnimations } from "animation";

function Portfolio() {
  
  return (
    <section id="portfolio" >
    <div className="grid">
       
    </div>
    <div className="portfolio-more">
        <span>Load More</span>
        <img src={loadmore} alt="Load More" />
    </div>
  </section>
  )
}
const Section=sty
export default Portfolio