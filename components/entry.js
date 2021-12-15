import React, { Component, useState } from 'react';

class Entry extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   poem: '',
    // };
  }

  // printPoem() {
  //   console.log('reached printPoem');
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((poem) => {
  //       console.log(poem);
  //       return this.setState({
  //         poem: poem.poem_body,
  //       });
  //     })
  //     .catch((err) => console.log('Entry.printPoem - ERROR: ', err));
  // }

  render() {
    return (
      <button
        className='entry'
        getpoem={this.props.getpoem}
        onClick={(e) => this.props.getpoem(e)}
      >
        Entry {this.props.aprilDate}
      </button>
    );
  }
}

export default Entry;
