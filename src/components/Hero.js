import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import biryani from '../assets/biryani.png'
import qorma from '../assets/qorma.png'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
         Tastiest Pakistani Food <br />
         in New Jersey
        </h1>
        <p>
          Authentic Cuisine 
        </p>
        <Link to='/products' className='btn hero-btn'>
          Order online
        </Link>
            {/* <a href="https://www.clover.com/online-ordering/good-food-by-uzma-north-brunswick/" target="_blank" className='btn'
        >
          Order online
        </a> */}
      </article>
      <article className='img-container'>
        <img src={biryani} alt='pakistani food' className='main-img' />
        <img src={qorma} alt='pakistani food' className='accent-img' />
        
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      font-size: 41px;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    // .img-container::before {
    //   content: '';
    //   position: absolute;
    //   width: 10%;
    //   height: 80%;
    //   background: var(--clr-primary-9);
    //   bottom: 0%;
    //   left: -8%;
    //   border-radius: var(--radius);
    // }
  }
`

export default Hero