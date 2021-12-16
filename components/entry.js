import React, { Component, useState } from 'react';

class Entry extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   poem: '',
    // };
  }

  render() {
    return (
      <button
        className='entry'
        onClick={(e) => this.props.getpoem(e, this.props.aprilDate)}
      >
        Entry {this.props.aprilDate}
      </button>
    );
  }
}

export default Entry;
