import React from 'react';
import styled from 'styled-components';
import { GlobalContainer, WhiteBackground } from './global';

const AboutWrapper = styled.article`
  color: ${(props) => props.theme.colors.darkGrey};
  padding: 4rem 0 0 0;
  columns: 1;
  @media screen and (min-width: 600px) {
    columns: 3;
  }
`;

const Highlight = styled.h2`
  text-align: left;
  line-height: 1.2;
  padding: 0 0 1rem 0;
  margin: 0;
  @media screen and (min-width: 600px) {
    text-align: right;
    padding: 0 0 8rem 0;
  }
`

const Description = styled.p`
  line-height: 1.7;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
`;

const About = () => (
  <WhiteBackground>
    <GlobalContainer>
      <AboutWrapper>
        <Highlight>Ik ben een extraverte frontend developer met een achtergrond in UX / UI design.</Highlight>
        <Description>Waar ik blij van word is het bouwen van gebruiksvriendelijke interfaces die er ook nog eens prachtig uitzien én technisch goed in elkaar zitten. Ik ben van nature heel nieuwsgierig en ben constant opzoek naar manieren om me verder te ontwikkelen. JavaScript is mijn grote liefde en op het gebied van frameworks voel ik me het meest thuis bij React. Maar ik wil nog veel meer leren. Van leren wordt blij en daarom pak ik dingen snel op! Daarnaast ben ik een natuurlijke spreker en neem ik graag initiatief. Ik kan razend enthousiast zijn over dingen die ik belangrijk vind en steek mensen daar snel mee aan. Waar je me aan kunt herkennen? In mijn browser staan altijd 34 tabbladen tegelijkertijd open maar ik weet precies wat waar staat. Ik houd van korte, explosieve workouts en op kantoor drink ik mijn koffie uit een flamingo-vormige mok.</Description>
      </AboutWrapper>
      {/* <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>React</li>
        <li>GraphQl & Apollo</li>
        <li>Flow</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>GIT</li>
        <li>Sketch</li>
        <li>Adobe Illustrator</li>
        <li>User experience design</li>
        <li>Visual & UI design </li>
        <li>Agile/Scrum</li>
        <li>Usability</li>
      </ul> */}
    </GlobalContainer>
  </WhiteBackground>
);

export default About;
