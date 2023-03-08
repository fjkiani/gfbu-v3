import React from 'react'
import { FeaturedProducts, Hero, Services, Contact, HeroTest, OurServices, Accordion, Reviews, SlideShow } from '../components'
import biryani from '../assets/biryani.png'

const HomePage = () => {
  return (
    <main>
      <HeroTest img={biryani}/>
      <Hero/>
      <FeaturedProducts />
      <Services />
      <SlideShow/>
      <hr/>  
      <OurServices/>
      <Contact title="Join our Newsletter for Recipes " subTitle="from Chef Uzma" />
      <Accordion/>
      <Reviews/>

    </main>
  )
}

export default HomePage
