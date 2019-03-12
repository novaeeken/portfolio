import React, { Fragment } from 'react';
import {
  Header,
  About,
  Testimonials,
  JobAlert,
  Footer,
  Portfolio,
} from '../components';

const HomePage = () => (
  <Fragment>
    <Header />
    <About />
    <JobAlert />
    <Portfolio />
    <Testimonials />
    <Footer />
  </Fragment>
);

export default HomePage;
