import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../nova.png';
import { YellowGradient, GlobalContainer } from './global';

const Intro = styled.span`
  padding: 7rem 0 0 0;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  @media screen and (min-width: 600px) {
    text-align: right;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 6rem;
  line-height: 1;
  @media screen and (min-width: 600px) {
    line-height: 0;
  }
`;

const Light = styled.span`
  display: inline;
  font-weight: 300;
`;

const SubTitle = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 0;
`

const Photo = styled.img`
  border-radius: 50%;
  width: 10rem;
  border: .5rem solid ${(props) => props.theme.colors.white};
  transform: translateY(10rem);
`;

const Header = () => (
  <YellowGradient>
    <GlobalContainer>
      <Intro>
        <Title>Nova <Light>Eeken</Light></Title>
        <SubTitle>frontend developer </SubTitle>
      </Intro>
      <Photo src={ProfilePicture} alt="Profile picture"/>
    </GlobalContainer>
  </YellowGradient>
);

export default Header;
