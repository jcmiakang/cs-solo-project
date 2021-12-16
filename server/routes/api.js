const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router();

router.get('/:date', controllers.getpoem, (req, res) => {
  console.log('ENTERING ROUTER - /');
  res.status(200).json(res.locals.poem);
  console.log('SUCCESSFUL QUERY - EXITING ROUTER');
});

module.exports = router;
