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
    </div>
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
</Nav>
  )
}
const Nav = styled.nav`
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
        a:hover{
          color:var(--secondary-color);
          border-bottom:0.2rem solid #fff;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;

export default Navbar;
