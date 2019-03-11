import React, { Component, Fragment } from 'react';
import { GlobalStyles } from './theme';
import { HomePage } from './pages';

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
