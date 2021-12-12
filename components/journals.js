import React, { Component } from 'react';
import Days from './day.js';

class Journals extends Component {
  constructor(props) {
    super(props);
  }

  // for each journal in the database for the user, renders one button to access all entries
  render() {
    return (
      <div>
        <h1>Journals</h1>
      </div>
    );
  }
}

export default Journals;
