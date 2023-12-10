const express = require('express');
const router = express.Router();
const { clientReviews } = require('../models/reviewsModel');


router.get('/', (req, res) => {
  console.log('reviews')
  res.send(clientReviews);
});



module.exports = router;
