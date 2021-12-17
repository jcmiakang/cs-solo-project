const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router();

router.get('/:date', controllers.getpoem, (req, res) => {
  res.status(200).json(res.locals.poem);
  console.log('SUCCESSFUL QUERY - EXITING ROUTER');
});

router.put(
  '/:date',
  controllers.deletePoem,
  controllers.getpoem,
  (req, res) => {
    res.status(200).json(res.locals.poem);
    console.log('SUCCESSFUL QUERY - EXITING DELETE ROUTER');
  }
);

router.put('/:date/:title/:poem', controllers.updatePoem, (req, res) => {
  res.status(200).json({ message: 'successful edit!' });
  console.log('SUCCESSFUL QUERY - EXITING PUT ROUTER');
});

module.exports = router;
