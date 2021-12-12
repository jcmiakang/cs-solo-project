const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router();

router.get('/', controllers.getpoem, (req, res) => {
  res.status(200).json(res.locals.poem);
});

module.exports = router;
