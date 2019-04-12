import React from 'react';
import styled from 'styled-components';
import { GlobalContainer, WhiteBackground } from './global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
	background: hsl(0, 0%, 90%);
  color: hsl(1, 100%, 100%);
  font-size: 2rem;
  overflow: hidden;
  position: relative;
`;

const Description = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0 1rem;
  font-weight: 600;
  background-color: hsla(136, 0%, 100%, 0.55);
  color: ${(props) => props.theme.colors.black};
  p {
    padding-left: 1rem;
  }
`;

const One = styled(Block)`
  grid-area: one;
  /* background-color: hsl(126, 77%, 78%); */
`;

const Two = styled(Block)`
  grid-area: two;
  /* background-color: hsl(335, 57%, 46%); */
`;

const Three = styled(Block)`
  grid-area: three;
  /* background-color: hsl(39, 92%, 70%); */
`;

const Four = styled(Block)`
  grid-area: four;
  /* background-color: coral; */
`;

const Five = styled(Block)`
  grid-area: five;
  /* background-color: orange; */
`;

const Six = styled(Block)`
  grid-area: six;
  /* background-color: hsl(239, 28%, 69%); */
`;

const Seven = styled(Block)`
  grid-area: seven;
`;

const Disclaimer = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  & a, a:visited {
    color: ${(props) => props.theme.colors.orange};
  }

`;

const Portfolio = () => (
  <WhiteBackground>
    <GlobalContainer>
      <SectionTitle>Portfolio</SectionTitle>
      <Disclaimer>Een gedetailleerde showcase van mijn portfolio is in de maak. Voor nu kun je een groot gedeelte vinden op <a href="https://codepen.io/novaeeken/">Codepen</a>.</Disclaimer>
      <PortfolioWrapper>
        <One>
          coming soon...
          {/* <Description>
            <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
            <p>Wat eten we vanavond - webapp</p>
          </Description> */}
        </One>
        <Two>
          coming soon...
          {/* <Description>
            <FontAwesomeIcon icon={['fab', 'codepen']} size="lg" />
            <p>Hamburger menu</p>
          </Description> */}
        </Two>
        <Three>
          coming soon...
          {/* <Description>
            <FontAwesomeIcon icon={['fab', 'codepen']} size="lg" />
            <p>Loading screen</p>
          </Description> */}
        </Three>
        <Four>
          coming soon...
          {/* <Description>
            <FontAwesomeIcon icon={['fab', 'codepen']} size="lg" />
            <p>Animated dropdown</p>
          </Description> */}
        </Four>
        <Five>
          coming soon...
          {/* <Description>
            <FontAwesomeIcon icon={['fab', 'adobe']} size="lg" />
            <p>Tightasses</p>
          </Description> */}
        </Five>
        <Six>
        coming soon...
        {/* <Description>
          <FontAwesomeIcon icon={['fab', 'codepen']} size="lg" />
          <p>Loaders</p>
        </Description> */}
        </Six>
        <Seven>
          coming soon...
        </Seven>
      </PortfolioWrapper>
    </GlobalContainer>
  </WhiteBackground>
);

export default Portfolio;
