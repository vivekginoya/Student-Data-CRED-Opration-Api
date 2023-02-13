const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  fname:String,
  lname:String,
  maths:Number,
  science:Number,
  stat:Number,
  account:Number,
  english:Number
});

const STUDENT = mongoose.model('data', StudentSchema);
module.exports = STUDENT;