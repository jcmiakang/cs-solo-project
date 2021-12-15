// MIDDLEWARE FUNCTIONS

const db = require('../models/models');
// const { param } = require('../');

const controllers = {};

controllers.getpoem = (req, res, next) => {
  // SQL query
  const poem = 'SELECT poem_body FROM entries';

  console.log('ENTERED GETPOEM MIDDLEWARE');

  db.query(poem)
    .then((data) => {
      res.locals.poem = data.rows[0];
      console.log(data.rows[0]);
      console.log('EXITING GETPOEM MIDDLEWARE: ', data);
      next();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      next({ log: `ERROR ${err}` });
    });
};

module.exports = controllers;
