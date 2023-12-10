const express = require('express');
const router = express.Router();

const message = 'data received';

router.post('/new-application', (req, res) => {
  console.log(req.body);
  res.send(message);
});


router.get('/', (req, res) => {
  console.log(res.message);
  res.send(message)
})

module.exports = router;