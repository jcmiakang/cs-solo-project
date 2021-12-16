const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router();

router.get('/:date', controllers.getpoem, (req, res) => {
  console.log('ENTERING ROUTER - /');
  res.status(200).json(res.locals.poem);
  console.log('SUCCESSFUL QUERY - EXITING ROUTER');
});

router.put('/:date', (req, res) => {
  console.log('ENTERING PUT ROUTER - /');
  res.status(200).json({ message: 'success!' });
  console.log('SUCCESSFUL QUERY - EXITING PUT ROUTER');
});

module.exports = router;
