const express = require('express');
const router = express.Router();
const { servicesData } = require('../models/serviceModel');

const message = 'data received';

router.post('/new-application', (req, res) => {
  console.log(req.body);
  res.send(message);
});


router.get('/', (req, res) => {
  console.log(res.message);
  res.send(servicesData);
})

module.exports = router;