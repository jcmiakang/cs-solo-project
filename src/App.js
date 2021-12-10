import React, { Component } from 'react';
import Day from '../components/day.js';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>One Poem A Day</h1>
        <Day />
      </div>
    );
  }
}

export default App;
