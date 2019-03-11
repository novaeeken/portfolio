import React from 'react';
import styled from 'styled-components';
import { GlobalContainer as GlobalContainerComponent } from './global';

const Card = styled.section`
  width: 35rem;
  border-radius: .2rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  padding: 2rem 1.5rem;
  filter: drop-shadow(5px 5px 10px hsla(0, 0%, 70%, .5));

  & p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }
`;

const CardTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 800;
`;

const ContactInfo = styled.section`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};
`;

const FooterBackground = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

const GlobalContainer = styled(GlobalContainerComponent)`
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
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

const Favicons = styled.section`
  display: flex;
  justify-items: space-between;
`;

const Footer = () => (
  <FooterBackground>
    <GlobalContainer>
      <ContactInfo>
        <Title>Contact</Title>
        <EmailTitle>Email</EmailTitle>
        <Email>info@novaeeken.com</Email>
        <Favicons>
          <ul>
            <li>C</li>
            <li>L</li>
            <li>G</li>
            <li>M</li>
          </ul>
        </Favicons>
      </ContactInfo>
      <Card>
        <CardTitle>Laten we iets speciaals creeeren.</CardTitle>
        <p>Of een kopje koffie drinken, dat kan natuurlijk ook.</p>
        <p>Ik ben een frontend developer met een achtergrond in UI/UX Design. Waar ik blij van word is het bouwen van gebruiksvriendelijke interfaces die er ook nog eens prachtig uitzien én technisch goed in elkaar zitten. Je hebt net mijn portfolio bekeken. Meer weten? Je kunt me ook vinden op linkedin, codepen en github.</p>
      </Card>
    </GlobalContainer>
  </FooterBackground>
);

export default Footer;
