import React, { useState, useEffect } from 'react'
import Menu from './Menu';
import Categories from './Categories';
import axios from 'axios'


const url = '/.netlify/functions/catering'

export default function Catering() {
    const [loading, setLoading] = useState(true)
    const [menuItems, setMenuItems] = useState([])
    const[categories,setCategories] =useState([])



    const fetchData = async () => {
        try {
          const { data } = await axios.get(url)
          const allCategories = ['all', ...new Set(data.map((item) => item.category))];
          console.log(allCategories)

          setMenuItems(data)
        //   console.log(data)
        } catch (error) {}
        setLoading(false)
      }
      


    
      useEffect(() => {
        fetchData()
      }, [])


      const filterItems = (category) => {
        const newItems = menuItems.filter((item)=> item.category === category)
        setMenuItems(newItems)
    }


    return (
        <div>
            <h2>Catering Menu</h2>
            <Categories categories={categories} filterItems={filterItems}/>
            <Menu items={menuItems} />
        </div>
    )
}
