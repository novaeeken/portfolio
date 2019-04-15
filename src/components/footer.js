import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GlobalContainer as GlobalContainerComponent } from './global';

const FooterBackground = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

const GlobalContainer = styled(GlobalContainerComponent)`
  flex-direction: row;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
  flex-wrap: wrap;
  padding: 0;
  transform: translateY(-4rem);
`;

const Card = styled.section`
  max-width: 35rem;
  border-radius: .2rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin: 0;
  @media screen and (min-width: 600px) {
    margin: 0 0 0 2rem;
  }
  filter: drop-shadow(5px 5px 10px hsla(0, 0%, 70%, .5));

  & p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }
`;

const CardTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 900;
  margin: 0;
`;

const CardSubTitle = styled.p`
  margin: 0 0 1rem 0;
`;

const ContactInfo = styled.section`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};
  flex-shrink: 0;
  width: 100%;
  @media screen and (min-width: 600px) {
    width: auto;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.5;
  margin: 1rem 0;
`;

const EmailTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  color: ${(props) => props.theme.colors.grey};
`;

const Email = styled(EmailTitle)`
  color: ${(props) => props.theme.colors.black};
`;

const Favicons = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0;
`;

const Item = styled.li`
  display: block;
  list-style-type: none;
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.black};
  &:hover, &:visited {
    color: ${(props) => props.theme.colors.black};
  }
`;

const Footer = () => (
  <FooterBackground>
    <GlobalContainer>
      <ContactInfo>
        <Title>Contact</Title>
        <EmailTitle>Email</EmailTitle>
        <Email>info@novaeeken.com</Email>
        <Favicons>
          <Item><Link href='https://codepen.io/novaeeken/'><FontAwesomeIcon icon={['fab', 'codepen']} size="lg" /></Link></Item>
          <Item><Link href='https://www.linkedin.com/in/novaeeken/'><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg" /></Link></Item>
          <Item><Link href='https://www.github.com'><FontAwesomeIcon icon={['fab', 'github']} size="lg" /></Link></Item>
          <Item><Link href='mailto:nova_eeken@hotmail.com?subject=Laten we iets speciaals creeren'><FontAwesomeIcon icon={['far', 'envelope']} size="lg" /></Link></Item>
        </Favicons>
      </ContactInfo>
      <Card>
        <CardTitle>Laten we iets speciaals creeeren.</CardTitle>
        <CardSubTitle>Of een kopje koffie drinken, dat kan natuurlijk ook.</CardSubTitle>
        <p>Ik ben een frontend developer met een achtergrond in UI/UX Design. Ik bouw gebruiksvriendelijke websites en apps die visueel en technisch tot in de puntjes zijn uitgedacht. Je hebt net mijn portfolio bekeken. Meer weten? Je kunt me ook vinden op linkedin, codepen en github. Of stuur me een mailtje!</p>
      </Card>
    </GlobalContainer>
  </FooterBackground>
);

export default Footer;
