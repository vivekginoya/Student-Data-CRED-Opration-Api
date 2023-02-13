var express = require('express');
var STUDENT = require('../models/user');
var router = express.Router();

/* GET home page. */
router.post('/add',async function(req, res, next) {
  try {
    console.log(req.body);
    let data = await STUDENT.create(req.body)
    res.status(201).json({
      status:"Success",
      message:"Add Data Successfully...",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status:"Fail",
      message:error.message
    })
  }
});

router.get('/show',async function(req, res, next) {
  try {
    let data = await STUDENT.find()
    res.status(200).json({
      status:"Success",
      message:"Show Data Successfully...",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status:"Fail",
      message:error.message
    })
  }
});

router.post('/edit',async function(req, res, next) {
  try {
    let eid = req.query.eid
    let data = await STUDENT.findByIdAndUpdate(eid,req.body)
    res.status(200).json({
      status:"Success",
      message:"Edit Data Successfully...",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status:"Fail",
      message:error.message
    })
  }
});

router.get('/delete',async function(req, res, next) {
  try {
    let did = req.query.did
    let data = await STUDENT.findByIdAndDelete(did)
    res.status(200).json({
      status:"Success",
      message:"Delete Data Successfully...",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status:"Fail",
      message:error.message
    })
  }
});

module.exports = router;
