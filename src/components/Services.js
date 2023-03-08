import React from "react"
import styled from "styled-components"
import Title from "./Title"
import services from "../utils/services"

const Services = () => {
  return (
    <Wrapper className="section">

      <Title title="about us" />
      <div className="section-center">
        {services.map(({ id, icon, label, text }) => {
          return (
            <article className="service" key={id}>
              <span>{icon}</span>
              <h4>{label}</h4>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .section-center {
    margin-top: 4rem;
    display: grid;
    gap: 2rem;
    /* safari workaround */
    // grid-gap: 12rem;
    grid-gap: 10rem;
    width: 100%;
    text-align: center;
    .icon {
      font-size: 4rem;
      color: var(--clr-primary-5);
      margin-bottom: 1rem;
      width: 50%;
    }
    .service{
      width: 80% ;
    }
    .service:hover p {
      color: black;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 15px;
    }
    p {
      color: white;
      max-width: 35em;
    }
    @media (min-width: 100px) {
      grid-template-columns: repeat(1, 1fr 1fr 1fr);
      width: 100%;
      grid-gap: 1rem;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(1, 1fr 1fr 1fr);
      width: auto;
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10rem;
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(1fr);
    }
  }
`
export default Services
