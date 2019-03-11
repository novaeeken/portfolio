import React from 'react';
import styled from 'styled-components';
import { YellowGradient, GlobalContainer } from './global';

const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  font-weight: 300;
`

const JobAlert = () => (
  <YellowGradient>
    <GlobalContainer>
      <SubTitle>Website nodig? Ik ben beschikbaar voor freelance klussen.</SubTitle>
    </GlobalContainer>
  </YellowGradient>
);

export default JobAlert;
