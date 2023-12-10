const express = require('express');
const router = express.Router();
const { ourAdvantages, howWeWorkList } = require('../models/mainModel');


router.get('/', (req, res) => {
  console.log('main page request')
  res.send({ ourAdvantages, howWeWorkList })
});



module.exports = router;
