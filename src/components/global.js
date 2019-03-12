import styled from 'styled-components';

export const YellowGradient = styled.div`
  display: flex;
  justify-content: center;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f2af35+32,f5753a+100 */
  background: ${(props) => props.theme.colors.yellow}; /* Old browsers */
  background-image: -moz-linear-gradient(-45deg, ${(props) => props.theme.colors.yellow} 32%, ${(props) => props.theme.colors.orange} 100%); /* FF3.6-15 */
	background-image: -webkit-linear-gradient(-45deg, ${(props) => props.theme.colors.yellow} 32%, ${(props) => props.theme.colors.orange} 100%); /* Chrome10-25,Safari5.1-6 */
	background-image: linear-gradient(135deg, ${(props) => props.theme.colors.yellow} 32%, ${(props) => props.theme.colors.orange} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
`;

export const WhiteBackground = styled(Background)`
  background-color: ${(props) => props.theme.colors.white};
`;

export const GlobalContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dotted black;
  padding: 5rem 0;
`;

export default null;
