import React, { Component } from 'react';
import Days from '../components/day.js';
import Entry from '../components/entry.js';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poem: '',
    };
  }
  // componentDidMount() {
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((poem) => {
  //       return this.setState({
  //         poem: peom,
  //       });
  //     })
  //     .catch((err) => console.log('componenetDidMount - ERROR: ', err));
  // }
  render() {
    return (
      <div>
        <h1>National Poetry Month</h1>
        <Days />
        <h1>Love this poem: {this.state.poem}</h1>
      </div>
    );
  }
}

export default App;
