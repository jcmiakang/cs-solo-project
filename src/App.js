import React, { Component } from 'react';
import Days from '../components/day.js';
import Entry from '../components/entry.js';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      title: '',
      poem: '',
    };
    this.getpoem = this.getpoem.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateAll = this.updateAll.bind(this);
  }

  getpoem(e, date) {
    const paramFetch = `/api/${date}`;
    fetch(paramFetch)
      .then((res) => res.json())
      .then((poem) => {
        console.log('LEAVING FETCH REQUEST');
        // if poem.title or poem.poem_body === undefined, set to ''
        return this.setState({
          date: date,
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

  updateAll() {
    console.log(this.state.title);
    console.log(this.state.poem);

    let date = this.state.date;
    const paramFetch = `/api/${date}`;
    fetch(paramFetch, {
      method: 'PUT',
      body: JSON.stringify({ title: this.state.title, poem: this.state.poem }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('RESPONSE: ', res);
      })
      .catch((err) => console.log('Entry.updateAll - ERROR: ', err));
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
        <button onClick={this.updateAll}>Update</button>
        <button onClick={(e) => console.log('clicked DELETE')}>Delete</button>
      </div>
    );
  }
}

export default App;
