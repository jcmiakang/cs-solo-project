import React, { Component, useState } from 'react';

class Entry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className='button'
        onClick={(e) => this.props.getpoem(e, this.props.aprilDate)}
      >
        April {this.props.aprilDate}
      </button>
    );
  }
}

export default Entry;
