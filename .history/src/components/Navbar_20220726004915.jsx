import React,{useState} from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png";
import { GitHamBurgerMenu } from 'react-icons/gi'
import { MdClose } from "react-icons/md";

const Navbar = () => {
const {isNavOpen,setIsNavOpen}=useState(false);
  return (
    <Nav>
<div  className="brand__container">
 <a href="#" className="brand">
 <img src={logo}  alt="logo"/>
 </a>
 <div cassName="toggle"></div>
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

const Nav = styled`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: #fff;
  padding-top: 2rem;
  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active{
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      li {
        a {
          color: #fff;
          text-decoration: none;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
      }
    }
  }
  `;