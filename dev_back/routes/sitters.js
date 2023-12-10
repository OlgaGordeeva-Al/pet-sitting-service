const express = require('express');
const router = express.Router();

const { sittersArr } = require('../models/sittersModel');

router.get('/', (req, res) => {
  res.send(sittersArr);
});

module.exports = router;