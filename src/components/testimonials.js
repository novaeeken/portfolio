import React from 'react';
import styled from 'styled-components';
import '../backToOrigin.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { GlobalContainer, WhiteBackground } from './global';
import SectionTitle from './title';
import profileJB from '../images/testimonial_jb.png';
import profileLC from '../images/testimonial_lc.png';
import profileJV from '../images/testimonial_jv.png';

const Testimonial = styled(ScrollAnimation)`
  display: grid;
  grid-template-rows: 50px 50px auto 1fr;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-areas:
    ". picture ."
    ". picture ."
    "header header header"
    "section section section";
  width: 21rem;
  margin: 2rem 0;
  filter: drop-shadow(5px 5px 10px hsla(0, 0%, 70%, .5));

  /* Animated fade in */
	transform: translate(0,4rem);
  opacity: 0;
  transition: transform 1s ease, opacity 1s ease;

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    grid-template-rows: 5rem auto 100px 1fr;
    grid-template-columns: 50px 50px 1fr;
    grid-template-areas:
      ". . header"
      "picture picture header"
      "picture picture section"
      ". . section";
    width: 40rem;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100px;
`;

const ImageLink = styled.a`
  grid-area: picture;
`;

const Header = styled.header`
  grid-area: header;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  padding: 0 1.5rem;
`;

const Author = styled.h4`
  font-size: 1rem;
  line-height: 0;
  text-transform: uppercase;
`;

const Profession = styled.p`
  font-style: italic;
`;

const Message = styled.section`
  grid-area: section;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  padding: 0 1.5rem 1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 1rem;
`;

const Card = styled.div`
  grid-area: 2 / 1 / 5 / 4;

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    grid-area: 1 / 2 / 5 / 4;
  }

  border-radius: .2rem;
  z-index: -1;
  background-color: ${(props) => props.theme.colors.white};
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 1.5rem;
    background-image: linear-gradient(-90deg, ${(props) => props.theme.colors.yellow}, ${(props) => props.theme.colors.orange});
    width: calc(100% - (1.5rem * 2));
    height: .4rem;
  }
`;

const TestimonalsWrapper = styled.div`
  padding: 0 0 3rem 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (min-width: 1025px) {
    justify-content: space-between;
  }
`;

// @todo: should come from contentful
const testimonialData = [
  {
    author: 'Dr. Jeroen Benjamins',
    profession: 'Universitair docent',
    company: 'Universiteit Utrecht',
    message: 'Ik heb het plezier gehad Nova te mogen begeleiden tijdens haar masterscriptie, waar zij onderzoek deed naar de schaalbaarheid van UX onderzoeksmethoden. Maar veel begeleiding was niet nodig: als Nova iets aanpakt, dan doet ze dat grondig, gedegen en goed. Met haar zelfstandige, intelligente en kritische aanpak is geen probleem te groot.',
    linkedIn: 'https://www.linkedin.com/in/jeroen-benjamins-18b7864/',
    image: profileJB,
  },
  {
    author: 'Lloyd Chambier',
    profession: 'Docent',
    company: 'NY Code + Design Academy',
    message: 'From my experience, Nova’s ability to learn, code and deliver functional products are all remarkable. She has a natural drive to solve problems and I have seen first hand that she won\'t stop working on something until a bug has been fixed or a feature has been improved. I would say that overall Nova is definitely one of the best students I\'ve had and I would strongly recommend her for any position.',
    linkedIn: 'https://www.linkedin.com/in/lloyd-chambrier-b9396870/',
    image: profileLC,
  },
  {
    author: 'Jasper Volkers',
    profession: 'Customer Succes Manager',
    company: 'Contentoo ',
    message: 'Nova heeft ons geadviseerd op gebied van UI/UX tijdens de development van ons platform. Het resultaat: een goede balans tussen functionaliteiten en gebruiks-vriendelijkheid. Haar werkwijze is professioneel, oplossingsgericht en to the point. Een aanrader voor iedere ondernemer die zijn of haar applicatie naar het volgende level wilt tillen!',
    linkedIn: 'https://www.linkedin.com/in/jaspervolkers/',
    image: profileJV,
  },
];

const Testimonials = () => (
  <WhiteBackground>
    <GlobalContainer>
      <SectionTitle>Testimonials</SectionTitle>
      <TestimonalsWrapper>
        {testimonialData && testimonialData.map(testimonial => (
          <Testimonial
            animateIn="backToOrigin"
            duration={.6}
            animateOnce
            delay={testimonialData.indexOf(testimonial) * 300}
            key={testimonial.author}
          >
            <ImageLink href={testimonial.linkedIn}><Img src={testimonial.image} alt="profile-image" /></ImageLink>
            <Header>
              <Author>{testimonial.author}</Author>
              <Profession>{testimonial.profession}<br />@{testimonial.company}</Profession>
            </Header>
            <Message>
              <p>{testimonial.message}</p>
            </Message>
            <Card />
          </Testimonial>
        ))}
      </TestimonalsWrapper>
    </GlobalContainer>
  </WhiteBackground>
);

export default Testimonials;
