import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import axios from 'axios'



const url = '/.netlify/functions/hero'


const SlideShow = ({title}) => {

  const [products, setProducts] = useState([])
  const [index, setIndex] = React.useState(0)

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url)
      setProducts(data)
      console.log(data)
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
    fetchData()
  }, [])


  return (
    <Wrapper className='section'>
       <div className="section-center">
       <h3>{title}</h3>

      {products.map((product, productIndex)=> {
    // const { name, type } = item.data

    const {name,image, id } = product
    const customerImg = image[0].url
    // console.log(customerImg)
    
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

    
      
      <div className="testing">
      {/* <h2>{name}</h2> */}
      <img src={customerImg} alt={name} className="images">
           
      </img>
      </div>
      {/* <FiChevronRight className="icon" /> */}

  
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

  .section-center {
    margin-top: 4rem;
    height: 100vh;
    // max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
    .images {
      background-size: cover;
      background-position: center;
      width: 165vh;
      height: 45rem;
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
      top: 40vh;
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
     width: 85vw;
    max-width: 800px;
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
  @media (max-width: 400px) {
    .images {
    width: 25rem!important;
    height: 20rem!important;
  }
  .next, .prev {
    top: 20vh!important;
  }
  .section {
    padding: 1rem 0;
  }
  .section-center {
    height:35vh;
  }
}
  
`
export default SlideShow