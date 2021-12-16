import React, { Component } from 'react';
import Days from '../components/day.js';
import Entry from '../components/entry.js';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poem: '',
    };
    this.getpoem = this.getpoem.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  getpoem(e, date) {
    const paramFetch = `/api/${date}`;
    fetch(paramFetch)
      .then((res) => res.json())
      .then((poem) => {
        console.log('LEAVING FETCH REQUEST');
        return this.setState({
          title: poem.title,
          poem: poem.poem_body,
        });
      })
      .catch((err) => console.log('Entry.getPoem - ERROR: ', err));
  }

  updateTitle(e) {
    const { value } = e.target;

    this.setState({
      title: value,
    });
    console.log(e);
  }

  updateBody(e) {
    const { value } = e.target;

    this.setState({
      poem: value,
    });
    console.log(e);
  }

  render() {
    return (
      <div>
        <h1 id='header'>National Poetry Month</h1>
        <Days getpoem={this.getpoem} />

        <input
          id='poem_title'
          placeholder='Poem title...'
          onChange={this.updateTitle}
          value={this.state.title}
        ></input>
        <textarea
          id='poem_body'
          placeholder='Write your poem here...'
          onChange={this.updateBody}
          value={this.state.poem}
        ></textarea>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <h1>National Poetry Month</h1>
  //       <Days getpoem={this.getpoem} />
  //       <h1>Title: {this.state.title}</h1>
  //       <h1>Poem: {this.state.poem}</h1>
  //     </div>
  //   );
  // }
}

export default App;
