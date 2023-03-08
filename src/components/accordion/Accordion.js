import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import styled from 'styled-components'



export default function Accordion() {
const [questions, setQuestions] = useState(data);

  return (
    <Wrapper>
      <div className="test">
      <div className='container'>
        <h3>You got questions, we got answers</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
@media screen and (min-width: 992px) {
  .container {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
}
// .test {
//   background-color:cornsilk;
// }
.container {
  width: 90vw;
  margin: 5rem auto;
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  max-width: var(--fixed-width);
  display: grid;
  gap: 1rem 2rem;
}
.container h3 {
  line-height: 1.2;
  font-weight: 500;
}

`
