import React, { Component } from 'react';
import Entry from './entry.js';

class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const days = [];
    for (let i = 1; i < 30; i++) {
      days.push(<Entry key={i} />);
    }
    return <div>{days}</div>;
  }
}

export default Day;
