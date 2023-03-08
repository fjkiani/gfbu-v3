import React from "react"
import buffet from "../assets/icons/buffet.png"
import terrace from "../assets/icons/terrace.png"
import freeDelivery from "../assets/icons/freeDelivery.png"
import mask from "../assets/icons/mask.png"
import temp from "../assets/icons/temp.png"
import curbside from "../assets/icons/curbside.png"
import cooking from "../assets/icons/cooking.png"
import halal from "../assets/icons/halal.png"
import dumbbell from "../assets/icons/dumbbell.png"
import shop from "../assets/icons/shop.png"




export default [
    {
      id: 1,
      icon: <img src={buffet} className="icon" />,
      label: "Catering",
    },
    {
        id: 2,
        icon: <img src={terrace} className="icon" />,
        label: "Outdoor Heated Dining",
      },
      {
        id: 4,
        icon: <img src={mask} className="icon" />,
        label: "COVID-19 Pre-cautions",

      },
      {
        id: 5,
        icon: <img src={cooking} className="icon" />,
        label: "Dine-in",

      },
      {
        id: 6,
        icon: <img src={halal} className="icon" />,
        label: "halal",
      },
      {
        id: 7,
        icon: <img src={curbside} className="icon" />,
        label: "Delivery",
      },
      {
        id: 8,
        icon: <img src={terrace} className="icon" />,
        label: "Outdoor Private Event Space",
      },
      {
        id: 9,
        icon: <img src={dumbbell} className="icon" />,
        label: "Meal Prep",
      },
      {
        id: 10,
        icon: <img src={curbside} className="icon" />,
        label: "Curbside Pickup",
      },
      {
        id: 12,
        icon: <img src={shop} className="icon" />,
        label: "Reduced capacity seating",
      },
      
    ]