const express = require('express');
const router = express.Router();
const { ourAdvantages, howWeWorkList } = require('../models/mainModel');


router.get('/', (req, res) => {
  res.send({ ourAdvantages, howWeWorkList })
});



module.exports = router;
