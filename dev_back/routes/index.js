const express = require('express');
const router = express.Router();
const { listArr, howWeWorkList } = require('../models/mainModel');


router.get('/', (req, res) => {
  res.send({ listArr, howWeWorkList })
});

module.exports = router;
