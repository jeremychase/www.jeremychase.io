import React, { Component } from 'react';

import Types from './Types';

class Root extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <p>hello, world</p>
        </header>
        <Types />
      </React.Fragment>
    );
  }
}

export default Root;
