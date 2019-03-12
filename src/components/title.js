import React from 'react';
import styled from 'styled-components';

const TitleComponent = styled.span`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0 0 2rem 0;
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 800;
  margin: .5rem 0 .5rem 0;
  color: ${(props) => props.theme.colors.darkGrey};
`;

const Dash = styled.div`
  width: 3rem;
  height: .2rem;
  background-color: ${(props) => props.theme.colors.darkGrey};
`;

const Title = ({children}) => (
  <TitleComponent>
    <SectionTitle>{children}</SectionTitle>
    <Dash />
  </TitleComponent>
);

export default Title;
