const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/weCare')
  .then(() => console.log('DB connection successful!'));

//Schema
var usersSchema = new mongoose.Schema({
  userId: { type: String },
  name: { type: String, required: [true, 'Required field'] },
  password: { type: String, required: [true, 'Required field'] },
  gender: { type: String },
  dateOfBirth: { type: String },
  email: { type: String },
  mobileNumber: { type: String },
  pincode: { type: Number },
  city: { type: String },
  state: { type: String },
  country: { type: String },
});

var usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;