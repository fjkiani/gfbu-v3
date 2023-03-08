import React from 'react'
import fresh from "../assets/icons/fresh.png"
import authentic from "../assets/icons/authentic.png"
import pakistan from "../assets/icons/pakistan.png"

import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'menu',
    url: '/products',
  },
  {
    id: 3,
    text: 'order',
    url: '/',
  },
  {
    id: 4,
    text: 'about',
    url: '/about',
  },
  {
    id: 5,
    text: 'contact',
    url: '/contact',
  },
  {
    id: 6,
    text: 'reserve',
    url: '/#',
  },
  {
    id: 7,
    text: 'catering',
    url: '/catering',
  },
]


export const products_url = 'https://kind-brahmagupta-28a5ed.netlify.app/api/products'

export const single_product_url = `https://kind-brahmagupta-28a5ed.netlify.app/api/products?id=`
