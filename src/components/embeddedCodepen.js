import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 320px;
  padding: 2rem 0 0;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
  @media screen and (min-width: 1024px) {
    width: ${props => props.width}px;
  }
`;

const Codepen = styled.section`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid ${props => props.theme.colors.black};
`;

const EmbeddedCodepen = ({ height, width, hash }) => {
  return (
    <Container width={width} >
      <Codepen
        className="codepen"
        data-height={height}
        data-theme-id="0"
        data-default-tab="result"
        data-user="novaeeken"
        data-slug-hash={hash}
        data-preview="true"
        >
      </Codepen>
    </Container>
  );
};

export default EmbeddedCodepen;
