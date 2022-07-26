import React from 'react'
import styled from "styled-components";

const Portfolio = () => {
  return (
    <Section id="portfolio" ref={element}>
    <div className="grid">
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-one grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-two grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-three grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-four grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-five grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-six grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-seven grid-box"></motion.div>
        <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-eight grid-box"></motion.div>
    </div>
    <div className="portfolio-more">
        <span>Load More</span>
        <img src={loadmore} alt="Load More" />
    </div>
  </Section>
  )
}

export default Portfolio