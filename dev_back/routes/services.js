const express = require('express');
const router = express.Router();
const { servicesData } = require('../models/serviceModel');

const message = 'data received';

router.post('/new-application', (req, res) => {
  console.log(req.body);
  res.send(message);
});


router.get('/', (req, res) => {
  let page = req.query.routeName;
  const data = servicesData.find(item => item.name === page);
  res.send(data);
})

module.exports = router;