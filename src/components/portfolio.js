import React from 'react';
import styled from 'styled-components';
import { GlobalContainer, WhiteBackground } from './global';
import SectionTitle from './title';

const PortfolioWrapper = styled.div`
  padding: 3rem 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  height: 100rem;
  width: 100%;
  grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven";

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    height: 60rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr 30px 0.5fr 0.5fr 1fr 1fr;
    grid-template-areas:
      "one one"
      "five three"
      "five three"
      "five two"
      "seven two"
      "seven four"
      "six four";
  }
  @media screen and (min-width: 1024px) {
    height: 60rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr 30px 1.5fr;
    grid-template-areas:
      "one one four"
      "two three four"
      "five three seven"
      "five six seven";
  }
`;

const Block = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
	box-shadow: .25rem .5rem 1rem 0 rgba(0, 0, 0, 0.1);
	background: hsl(36, 100%, 54%);
  color: hsl(1, 100%, 100%);
  font-size: 2rem;
`;

const One = styled(Block)`
  grid-area: one;
`;
const Two = styled(Block)`
  grid-area: two;
`;
const Three = styled(Block)`
  grid-area: three;
`;

const Four = styled(Block)`
  grid-area: four;
`;

const Five = styled(Block)`
  grid-area: five;
`;

const Six = styled(Block)`
  grid-area: six;
`;

const Seven = styled(Block)`
  grid-area: seven;
`;

const Portfolio = () => (
  <WhiteBackground>
    <GlobalContainer>
      <SectionTitle>Portfolio</SectionTitle>
      <PortfolioWrapper>
        <One>1</One>
        <Two>2</Two>
        <Three>3</Three>
        <Four>4</Four>
        <Five>5</Five>
        <Six>6</Six>
        <Seven>7</Seven>
      </PortfolioWrapper>
    </GlobalContainer>
  </WhiteBackground>
);

export default Portfolio;
