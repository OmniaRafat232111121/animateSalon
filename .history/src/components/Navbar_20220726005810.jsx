import React,{useState} from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png";
import { GitHamBurgerMenu } from 'react-icons/gi'
import { MdClose } from "react-icons/md";

const Navbar = () => {
const {isNavOpen,setIsNavOpen}=useState(false);
  return (
    <Nav>
    <div className="brand__container">
    <a href="#" className='brand'>
      <img src={logo} alt="logo" />
    </a>  
    <div className="toggle"></div>
     
 <div className="links">
 <ul>
 <li className="active">
     <a href="#home">Home</a>
   </li>
   <li>
     <a href="#services">Services</a>
   </li>
   <li>
     <a href="#portfolio">Portfolio</a>
   </li>
   <li>
     <a href="#blog">Blog</a>
   </li>
   <li>
     <a href="#skills">Skills</a>
   </li>
   <li>
     <a href="#contact">Contact</a>
   </li>
 </ul>
 </div>
</div>
</Nav>
  )
}

  export default Navbar;