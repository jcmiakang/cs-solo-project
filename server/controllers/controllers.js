// MIDDLEWARE FUNCTIONS

const db = require('../models/models');
const { render } = require('../server');

const controllers = {};

controllers.getpoem = (req, res, next) => {
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

controllers.deletePoem = (req, res, next) => {
  console.log('REACHED DELETE POEM');
  // //const poem =
  //   'UPDATE entries SET date=$1, title=$2, poem_body=$3 WHERE entries.id=$1';

  const poem = `UPDATE entries SET title='', poem_body='' WHERE entries.id=$1`;

  db.query(poem, [req.params.date])
    .then((data) => {
      console.log('EXITING DELETE POEM');
      next();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      next({ log: `ERROR ${err}` });
    });
};

controllers.updatePoem = (req, res, next) => {
  console.log('REACHED UPDATE POEM');
  console.log(req.params);

  const poem = 'UPDATE entries SET title=$2, poem_body=$3 WHERE entries.id=$1';

  db.query(poem, [req.params.date, req.params.title, req.params.poem])
    .then((data) => {
      console.log('EXITING UPDATE POEM');
      next();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      next({ log: `ERROR ${err}` });
    });
};

module.exports = controllers;
