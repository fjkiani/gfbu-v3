import React from "react";
import styled from "styled-components";

export default function Hero({ img, title, children }) {
  return (
    <HeroWrapper className="something"  
    img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
//   display: none;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.max ? "100vh" : "320vh")};
  color: var(--mainWhite);
  background: 
    url(${props => props.img}) center/cover no-repeat;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
  @media (max-width: 400px) {
      display:flex;
      min-height:80vh;
  }
`;


