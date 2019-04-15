import React, { Fragment } from 'react';
import styled from 'styled-components';
import { GlobalContainer, WhiteBackground } from './global';
import EmbeddedCodepen from './embeddedCodepen';
import SectionTitle from './title';

// const PortfolioWrapper = styled.div`
//   padding: 3rem 0 0;
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(7, 1fr);
//   grid-column-gap: 1rem;
//   grid-row-gap: 1rem;
//   height: 100rem;
//   width: 100%;
//   grid-template-areas:
//     "one"
//     "two"
//     "three"
//     "four"
//     "five"
//     "six"
//     "seven";

//   @media screen and (min-width: 600px) and (max-width: 1024px) {
//     height: 60rem;
//     grid-template-columns: repeat(2, 1fr);
//     grid-template-rows: 1fr 1fr 30px 0.5fr 0.5fr 1fr 1fr;
//     grid-template-areas:
//       "one one"
//       "five three"
//       "five three"
//       "five two"
//       "seven two"
//       "seven four"
//       "six four";
//   }
//   @media screen and (min-width: 1024px) {
//     height: 60rem;
//     grid-template-columns: repeat(3, 1fr);
//     grid-template-rows: 1fr 1fr 30px 1.5fr;
//     grid-template-areas:
//       "one one four"
//       "two three four"
//       "five three seven"
//       "five six seven";
//   }
// `;

// const Block = styled.article`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 2px;
// 	box-shadow: .25rem .5rem 1rem 0 rgba(0, 0, 0, 0.1);
// 	background: hsl(0, 0%, 90%);
//   color: hsl(1, 100%, 100%);
//   font-size: 2rem;
//   overflow: hidden;
//   position: relative;
// `;

// const One = styled(Block)`
//   grid-area: one;
//   /* background-color: hsl(126, 77%, 78%); */
// `;

// const Two = styled(Block)`
//   grid-area: two;
//   /* background-color: hsl(335, 57%, 46%); */
// `;

// const Three = styled(Block)`
//   grid-area: three;
//   /* background-color: hsl(39, 92%, 70%); */
// `;

// const Four = styled(Block)`
//   grid-area: four;
//   /* background-color: coral; */
// `;

// const Five = styled(Block)`
//   grid-area: five;
//   /* background-color: orange; */
// `;

// const Six = styled(Block)`
//   grid-area: six;
//   /* background-color: hsl(239, 28%, 69%); */
// `;

// const Seven = styled(Block)`
//   grid-area: seven;
// `;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 320px;

  @media screen and (min-width: 600px) {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 1050px;
    justify-content: space-between;
  }
`;

const Portfolio = () => (
  <Fragment>
  <WhiteBackground>
    <GlobalContainer>
      <SectionTitle>Portfolio</SectionTitle>
      <Row>
        <EmbeddedCodepen height="700" width="500" hash="mvoeOo" title="Animated hamburger menu" />
        <EmbeddedCodepen height="700" width="500" hash="bOPvvr" title="Animated hamburger menu" />
      </Row>
      <Row>
        <EmbeddedCodepen height="300" width="300" hash="vbxjVO" title="Animated hamburger menu" />
        <EmbeddedCodepen height="300" width="300" hash="LqPPxj" title="Animated hamburger menu" />
        <EmbeddedCodepen height="300" width="300" hash="BbLjvy" title="Animated hamburger menu" />
      </Row>
      <Row>
        <EmbeddedCodepen height="600" width="1050" hash="RdrYer" title="Animated hamburger menu" />
      </Row>
      {/* <PortfolioWrapper>
        <One>
          <EmbeddedCodepen height="400" hash="mvoeOo" title="Animated hamburger menu" />
        </One>
        <Two>
          coming soon...
          <Description>
            <FontAwesomeIcon icon={['fab', 'codepen']} size="lg" />
            <p>Hamburger menu</p>
          </Description>
        </Two>
        <Three>
          coming soon...
          <Description>
            <FontAwesomeIcon icon={['fab', 'codepen']} size="lg" />
            <p>Loading screen</p>
          </Description>
        </Three>
        <Four>
          coming soon...
          <Description>
            <FontAwesomeIcon icon={['fab', 'codepen']} size="lg" />
            <p>Animated dropdown</p>
          </Description>
        </Four>
        <Five>
          coming soon...
          <Description>
            <FontAwesomeIcon icon={['fab', 'adobe']} size="lg" />
            <p>Tightasses</p>
          </Description>
        </Five>
        <Six>
        coming soon...
        <Description>
          <FontAwesomeIcon icon={['fab', 'codepen']} size="lg" />
          <p>Loaders</p>
        </Description>
        </Six>
        <Seven>
          coming soon...
        </Seven>
      </PortfolioWrapper> */}
    </GlobalContainer>
  </WhiteBackground>
  </Fragment>
);

export default Portfolio;
