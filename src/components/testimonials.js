import React from 'react';
import styled from 'styled-components';
import { GlobalContainer, WhiteBackground, SectionTitle } from './global';

const Testimonial = styled.article`
  display: grid;
  grid-template-rows: 50px 50px auto 1fr;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-areas:
    ". picture ."
    ". picture ."
    "header header header"
    "section section section";
  width: 21rem;
  filter: drop-shadow(5px 5px 10px hsla(0, 0%, 70%, .5));

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    grid-template-rows: 5rem auto 100px 1fr;
    grid-template-columns: 50px 50px 1fr;
    grid-template-areas:
      ". . header"
      "picture picture header"
      "picture picture section"
      ". . section";
    width: 40rem;
    margin: 2rem 0;
  }
`;

const Img = styled.img`
  border-radius: 50%;
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
    background-image: linear-gradient(-90deg, #f2ae36, #f57839);
    width: calc(100% - (1.5rem * 2));
    height: .4rem;
  }
`;

const TestimonalsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (min-width: 1025px) {
    justify-content: space-between;
  }
`;

const testimonialData = [
  {
    author: 'Dr. Piet Pieters',
    profession: 'Universitair docent',
    company: 'Universiteit Utrecht',
    message: 'Its nice because the card stretches depending on the length of the text that you place in here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eius explicabo eveniet beatae velit! Consequatur a quisquam excepturi neque culpa facilis laborum, asperiores nulla, dolores, maxime minima iure nisi laboriosam!',
    image: 'https://placehold.it/100x100',
  },
  {
    author: 'Dr. Piet Pieters',
    profession: 'Universitair docent',
    company: 'Universiteit Utrecht',
    message: 'Its nice because the card stretches depending on the length of the text that you place in here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eius explicabo eveniet beatae velit! Consequatur a quisquam excepturi neque culpa facilis laborum, asperiores nulla, dolores, maxime minima iure nisi laboriosam!',
    image: 'https://placehold.it/100x100',
  },
  {
    author: 'Dr. Piet Pieters',
    profession: 'Universitair docent',
    company: 'Universiteit Utrecht',
    message: 'Its nice because the card stretches depending on the length of the text that you place in here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eius explicabo eveniet beatae velit! Consequatur a quisquam excepturi neque culpa facilis laborum, asperiores nulla, dolores, maxime minima iure nisi laboriosam!',
    image: 'https://placehold.it/100x100',
  },
];

const Testimonials = () => (
  <WhiteBackground>
    <GlobalContainer>
      <SectionTitle>Testimonials</SectionTitle>
      <TestimonalsWrapper>
        {testimonialData && testimonialData.map(testimonial => (
          <Testimonial>
            <Img src={testimonial.image} alt="profile-image" />
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
