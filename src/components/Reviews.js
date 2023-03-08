import styled from 'styled-components'
import { PageHero } from '../components'
import hero2 from '../assets/hero2.png'
import axios from 'axios'
import Title from "./Title"
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaQuoteRight } from "react-icons/fa"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"



const url = '/.netlify/functions/reviews'
const AboutPage = () => {



  const [products, setProducts] = useState([])
  const [index, setIndex] = React.useState(0)


  const fetchData = async () => {
    try {
      const { data } = await axios.get(url)
      setProducts(data)
      // console.log(data)
    } catch (error) {}
  }



  useEffect(() => {
    const lastIndex = products.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, products]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  
  useEffect(() => {
    fetchData()
  }, [])

  // const { fields } = product
  // const { name, quote, stars} = fields
return (

  <Wrapper className="section">
   <Title title="Over 500 Happy Customers" />
   <div className="section-center">
    {products.map((product, productIndex) => {
    const { id, name, quote, stars, image } = product
    const customerImg = image[0].url

    // console.log(product)

    let position = 'nextSlide';
    if (productIndex === index) {
      position = 'activeSlide';
    }
    if (
      productIndex === index - 1 ||
      (index === 0 && productIndex === product.length - 1)
    ) {
      position = 'lastSlide';
    }

    return (
      <article className={position} key={id}>

      <h4>{name}</h4>
      <img src={customerImg} alt={name} className="person-img" />
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />

  
      </article>
    )
    })}
      <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
    </div>
</Wrapper>

    )

  }
  const Wrapper = styled.div`
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
    .img {
      border-radius: 50%;
      margin-bottom: 1rem;
    }
    h4 {
      text-transform: uppercase;
      color: var(--clr-primary-5);
      margin-bottom: 0.25rem;
    }
    .title {
      text-transform: capitalize;
      margin-bottom: 0.75rem;
    }
    .text {
      max-width: 45em;
      margin: 0 auto;
      line-height: 2;
      color: var(--clr-grey-5);
    }
    .icon {
      font-size: 3rem;
      margin-top: 1rem;
      color: var(--clr-primary-5);
    }
    .prev,
    .next {
      position: absolute;
      top: 200px;
      transform: translateY(-50%);
      background: var(--clr-grey-5);
      color: var(--clr-white);
      width: 1.25rem;
      height: 1.25rem;
      display: grid;
      place-items: center;
      border-color: transparent;
      font-size: 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }
    .prev:hover,
    .next:hover {
      background: var(--clr-primary-5);
    }
    .prev {
      left: 0;
    }
    .next {
      right: 0;
    }
    @media (min-width: 800px) {
      .prev,
      .next {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
      }
    }
    article {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: var(--transition);
    }
    article.activeSlide {
      opacity: 1;
      transform: translateX(0);
    }
    article.lastSlide {
      transform: translateX(-100%);
    }
    article.nextSlide {
      transform: translateX(100%);
    }
  }
`
export default AboutPage
