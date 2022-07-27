import React from 'react'
import styled from 'styled-components';
import play from "../assets/play.png"
import home from "../assets/home.png"
import Title from './Title';

const Section = styled.section`
min-height: 100vh;
position: relative;
.blogs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 5rem 15rem;
  .blog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .image {
      height: 15rem;
      background: url(${home}) no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      h3 {
        color: var(--secondary-color);
        font-size: 1.5rem;
      }
    }
    .type {
      color: var(--primary-color);
      font-weight: bolder;
      text-transform: uppercase;
    }
    .desc {
      height: 10rem;
      color: var(--primary-color);
    }
    .more {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      span {
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: var(--primary-color);
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  margin: 2rem 0;
  .blogs {
    padding: 0 2rem;
    grid-template-columns: 1fr;
    margin: 0 1rem;
  }
}
`;

export default Blog