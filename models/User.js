const mongoose = require("mongoose");
const {isEmail} =require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true,'this field is required'],
    lowercase:true,
    validate:[isEmail,'Please enter a valid email']
  },
  password: {
    type: String,
    trim: true,
    required: [true,'this field is required'],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});



const User = mongoose.model("User", userSchema);

module.exports = User;
