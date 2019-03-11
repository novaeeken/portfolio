import React, { Fragment } from 'react';
import {
  Header,
  About,
  Testimonials,
  JobAlert,
  Footer,
} from '../components';

const HomePage = () => (
  <Fragment>
    <Header />
    <About />
    <JobAlert />
    <Testimonials />
    <Footer />
  </Fragment>
);

export default HomePage;
