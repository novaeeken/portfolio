import React, { Fragment } from 'react';
import styled from 'styled-components';
import { GlobalContainer, WhiteBackground } from './global';
import EmbeddedCodepen from './embeddedCodepen';
import SectionTitle from './title';

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
        <EmbeddedCodepen height="700" width="500" hash="mvoeOo" />
        <EmbeddedCodepen height="700" width="500" hash="bOPvvr" />
      </Row>
      <Row>
        <EmbeddedCodepen height="300" width="300" hash="vbxjVO" />
        <EmbeddedCodepen height="300" width="300" hash="LqPPxj" />
        <EmbeddedCodepen height="300" width="300" hash="BbLjvy" />
      </Row>
      <Row>
        <EmbeddedCodepen height="600" width="1050" hash="RdrYer" />
      </Row>
    </GlobalContainer>
  </WhiteBackground>
  </Fragment>
);

export default Portfolio;
