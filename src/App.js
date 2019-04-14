import React, { Component, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { GlobalStyles } from './theme';
import { HomePage } from './pages';
import './index.css';

library.add(
  fab,
  faEnvelope,
);

class App extends Component {
  render() {
    return (
      <Fragment>
          <GlobalStyles />
          <HomePage />
      </Fragment>
    );
  }
}

export default App;
