const express = require('express');
const Cards = require('../db/models/Cards');
const router = express.Router();


router.route('/')
.post((req,res)=>{
  let {status} = req.body;
  console.log(title);
})
.get((req,res)=>{
  res.send('smoketest')
})


module.exports = router;