import React, { useState } from 'react';
import Days from '../components/day.js';

import './styles.css';

const App = () => {
  const [date, setDate] = useState('');
  const [poemNum, setPoemNum] = useState('');
  const [title, setTitle] = useState('');
  const [poem, setPoem] = useState('');

  function getpoem(date) {
    const paramFetch = `/api/${date}`;
    fetch(paramFetch)
      .then((res) => res.json())
      .then((poem) => {
        console.log('LEAVING FETCH REQUEST');

        setDate(date);
        setPoemNum(date);
        setTitle(poem.title);
        setPoem(poem.poem_body);
      })
      .catch((err) => console.log('Entry.getPoem - ERROR: ', err));
  }

  function updateTitle(e) {
    const { value } = e.target;
    setTitle(value);
    console.log(e);
  }

  function updateBody(e) {
    const { value } = e.target;
    setPoem(value);
    console.log(e);
  }

  function updateAll() {
    // let date = date;
    let title = title;
    let poem = poem;
    const paramFetch = `/api/${date}/${title}/${poem}`;
    fetch(paramFetch, {
      method: 'PUT',
      body: JSON.stringify({ title: title, poem: poem }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('RESPONSE: ', res);
      })
      .catch((err) => console.log('Entry.updateAll - ERROR: ', err));
  }

  function deleteContents() {
    // let date = date;
    const paramFetch = `/api/${date}`;
    fetch(paramFetch, {
      method: 'PUT',
      body: JSON.stringify({ date: date }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((poem) => {
        setDate(date);
        setTitle(poem.title);
        setPoem(poem.poem_body);
      })
      .catch((err) => console.log('Entry.deleteContents - ERROR: ', err));
  }

  return (
    <div>
      <h1 id='header'>National Poetry Month</h1>
      <h2 id='rich_quote'>
        The moment of change is the only poem ~ Adrienne Rich
      </h2>
      <Days getpoem={getpoem} />
      <div className='text_inputs'>
        <h3 id='poem_for_april' onChange={getpoem}>
          Poem for April {poemNum}
        </h3>
        <textarea
          id='poem_title'
          placeholder='Poem title...'
          onChange={updateTitle}
          value={title}
        ></textarea>
        <textarea
          id='poem_body'
          placeholder='Write your poem here...'
          onChange={updateBody}
          value={poem}
        ></textarea>
      </div>
      <div className='edit_buttons'>
        <button id='save_button' onClick={updateAll}>
          Save
        </button>
        <button id='delete_button' onClick={deleteContents}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default App;
