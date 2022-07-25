import React,{useState} from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png";
import { GitHamBurgerMenu } from 'react-icons/gi'
import { MdClose } from "react-icons/md";

const Navbar = () => {
const {isNavOpen,setIsNavOpen}=useState(false);
  return (
<div className="brand__container">
 <a href="#" className="brand">
 <img src={logo}  alt="logo"/>
 </a>
 <div cassName="toggle"></div>
 <div className="links">
 <ul>
 <li className="active">
 <a href="#home">Home</a>
 </li>
 <li className="active">
 <a href="#service">Services</a>
 </li>
 <li className="active">
 <a href="#portfolio">Portfolio</a>
 </li>
 <li className="active">
 <a href="#Blog">Blog</a>
 </li>
 <li className="active">
 <a href="#skills">Skills</a>
 </li>
 <li className="active">
 <a href="#contct">contact</a>
 </li>
 </ul>
 </div>
</div>
  )
}
const Nav=styled.nav` 
display:flex;
justify-content:space-between;
margin:0 2rem;
color

`;
export default Navbar