import React from 'react'
import styled from 'styled-components'
import { PageHero, AboutIcons, Hero, Contact} from '../components'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import hero2 from '../assets/hero2.jpg'



const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page-section section-center'>
        <img src={logo} alt='logo' />
        <article>
          <div className='title'>
            <h4>our story</h4>
            <div className='underline'></div>
          </div>
          <p>
          started long before we knew the ending. Our namesake, Uzma, never intended to be a chef- she actually didn't learn to cook until she was married. It was circumstance that led her to discover her talent, and practice that refined it. And this talent is what inspired our restaurant- our family's labour of love, built with our hands and without a blueprint.
          </p>
          <br/><hr/><br/><br/>
          <div className='title'>
            <h4>our mission</h4>
            <div className='underline'></div>
          </div>
          <p>
          lie in going  back to the roots, using fresh ingredients and a healthy approach to cooking- without compromising taste. It might not be the fanciest, but we can guarantee our food is made with intention, hard work, and a shared love of taste.
          </p>
          <br/><hr/><br/><br/>
          <div className='title'>
            <h4>Our Values</h4>
            <div className='underline'></div>
          </div>
          <p>
          is to get you the good stuff. We mean the lick-your-plate-clean, just-like-home kind of good. We believe in keeping it simple and focusing on giving you the most authentic experience we can- whether you're looking for a quick take-out spot, a place to sit and eat with loved ones, or catering for a larger party.
          </p>
        </article>
        <Contact subTitle="Contact Us"/>
      </Wrapper>
      {/* <AboutIcons/> */}
      <Wrapper className='section-center'>
      {/* <Link to='/contact' className='btn hero-btn'>
          Contact Us
        </Link> */}
      </Wrapper>
    </main>
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
    padding: 0em;
  }
`
export default AboutPage