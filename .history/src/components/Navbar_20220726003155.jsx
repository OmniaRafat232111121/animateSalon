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
 <a href="#home">Home</a>
 </li>
 <li className="active">
 <a href="#home">Home</a>
 </li>
 <li className="active">
 <a href="#home">Home</a>
 </li>
 </ul>
 </div>
</div>
  )
}
const Nav=styled.nav` 

`;
export default Navbar