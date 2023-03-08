import React from "react"
import styles from "../css/footer.module.css"
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import hours from '../utils/hours'
import socialLinks from "../utils/social-links"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (

    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <a key={index} 
              href={item.url}>
              {item.text}
            </a>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialLinks.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
              {item.text}
            </a>
          )
        })}
      </div>
      <div className={styles.links}>
      <h5>Contact Details:</h5>
          <p>2070 US-1, North Brunswick Township, NJ 08902</p>
          <br/>
        <p>(732) 658-1188</p>    
        <p><a href="mailto:goodfoodbyuzma@gmail.com">goodfoodbyuzma@gmail.com</a></p>
      </div>
      <div className={styles.contact}>
        {hours.map((item, index) => {
          return (
            <a 
            key={index}
            >
            {item.text}
            <br/>
            {item.hours}
            <br/>
            </a>
          )
        })}
      </div>
  
      <hr/><br/>
      <div className={styles.copyright}>
        copyright &copy; Good Food By Uzma  {new Date().getFullYear()} all
        rights reserved
      </div>
      <br/>
      <p>This web app is powered by <a target="_blank"
              rel="noopener noreferrer" href="https://www.fahadkiani.com/"_blank>FJK</a></p>
    </footer>
  )
}

export default Footer
