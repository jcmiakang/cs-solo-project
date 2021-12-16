// MIDDLEWARE FUNCTIONS

const db = require('../models/models');
const { render } = require('../server');
// const { param } = require('../');

const controllers = {};

controllers.getpoem = (req, res, next) => {
  //const customInput = req.params.date;
  const poem = 'SELECT title, poem_body FROM entries WHERE entries.id=$1';

  console.log('ENTERED GET POEM MIDDLEWARE');

  db.query(poem, [req.params.date])
    .then((data) => {
      console.log(data.rows[0]);
      res.locals.poem = data.rows[0];
      // if data.row is undefined, return 404
      next();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      next({ log: `ERROR ${err}` });
    });
};

// controllers.getTile = (req, res, next) => {
//   console.log('REACHED GET TITLE');

//   const poem = 'SELECT title FROM entries WHERE entries.id=$1';

//   db.query(poem, [req.params.date])
//     .then((data) => {
//       //res.locals.poem = req.body.poem;
//       res.locals.title = data.rows[0];
//       console.log(data.rows[0]);
//       console.log('EXITING GET TITLE');
//       next();
//     })
//     .catch((err) => {
//       console.log(`Error: ${err}`);
//       next({ log: `ERROR ${err}` });
//     });
// };

module.exports = controllers;
