import React, { Component } from 'react';
import Entry from './entry.js';

class Days extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const days = [];
    for (let i = 1; i < 31; i++) {
      days.push(<Entry key={i} aprilDate={i} getpoem={this.props.getpoem} />);
    }
    return <div>{days}</div>;
  }
}

export default Days;
