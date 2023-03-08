import React from 'react'
import { FeaturedProducts, Hero, Services, Contact, HeroImage, OurServices } from '../components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import catering from '../assets/catering.png'

export default function ContactPage() {
    return (
        <div>
            <main>
      {/* <PageHero title='about' /> */}
      <Wrapper className='page section section-center'>
        {/* <img src={logo} alt='logo' /> */}
        <article>
          <div className='title'>
            <h4>Contact </h4>
            <div className='underline'></div>
          </div>
          <p>
          2070 US-1, North Brunswick Township, NJ 08902 
          <br/>
          (732) 658-1188
          <br/>
          Goodfoodbyuzma@gmail.com
          </p>
          <br/><hr/><br/><br/>
          <div className='title'>
            <h4>Hours</h4>
            <div className='underline'></div>
          </div>
          <p>
          <li>Monday: closed</li>
          <li>Tuesday-Thursday 11 AM–3:30PM, 5–9 PM</li>
          <li>Friday 11 AM–3:30 PM, 5–10 PM</li>
          <li>Saturday - Sunday 10:30 AM–3:30 PM, 5–10 PM</li>


          </p>
          <br/><hr/><br/><br/>
          <div className='title'>
            <h4>COVID-19 Notice</h4>
            <div className='underline'></div>
          </div>
          <p>
          As of 3/12/2021, we are taking reservations for our outdoor seating at a 50% capacity
          </p>
        </article>
      </Wrapper>
      <Wrapper className='section-center'>
      <Link to='/contact' className='btn hero-btn'>
          Find reservations
        </Link>
      </Wrapper>
    </main>

        </div>
    )
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  gap: 4rem;
  img {
    width: 50%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: contain;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
    padding: 8em;
  }
`