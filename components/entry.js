import React, { Component, useState } from 'react';

class Entry extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   poem: '',
    // };
  }

  // printPoem() {
  //   fetch('/')
  //     .then((res) => res.json())
  //     .then((poem) => {
  //       return this.setState({
  //         poem: poem,
  //       });
  //     })
  //     .catch((err) => console.log('Entry.printPoem - ERROR: ', err));
  // }

  render() {
    return (
      <button className='entry' onClick={this.printPoem}>
        Entry
      </button>
    );
  }
}

export default Entry;
