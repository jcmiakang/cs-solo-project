import React, { Component } from 'react';
import Days from '../components/day.js';
import Entry from '../components/entry.js';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      poem_number: '...',
      title: '',
      poem: '',
    };
    this.getpoem = this.getpoem.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateAll = this.updateAll.bind(this);
    this.deleteContents = this.deleteContents.bind(this);
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
          poem_number: date,
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
    let date = this.state.date;
    let title = this.state.title;
    let poem = this.state.poem;
    const paramFetch = `/api/${date}/${title}/${poem}`;
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

  deleteContents() {
    let date = this.state.date;
    const paramFetch = `/api/${date}`;
    fetch(paramFetch, {
      method: 'PUT',
      body: JSON.stringify({ date: this.state.date }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((poem) => {
        return this.setState({
          date: date,
          title: poem.title,
          poem: poem.poem_body,
        });
      })
      .catch((err) => console.log('Entry.deleteContents - ERROR: ', err));
  }

  render() {
    return (
      <div>
        <h1 id='header'>National Poetry Month</h1>
        <h2 id='rich_quote'>
          The moment of change is the only poem ~ Adrienne Rich
        </h2>
        <Days aprildate={this.props.aprildate} getpoem={this.getpoem} />
        <div className='text_inputs'>
          <h3 id='poem_for_april' onChange={this.getpoem}>
            Poem for April {this.state.poem_number}
          </h3>
          <textarea
            id='poem_title'
            placeholder='Poem title...'
            onChange={this.updateTitle}
            value={this.state.title}
          ></textarea>
          <textarea
            id='poem_body'
            placeholder='Write your poem here...'
            onChange={this.updateBody}
            value={this.state.poem}
          ></textarea>
        </div>
        <div className='edit_buttons'>
          <button id='save_button' onClick={this.updateAll}>
            Save
          </button>
          <button id='delete_button' onClick={this.deleteContents}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default App;
