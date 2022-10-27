//coaches schema
const mongoose = require('mongoose');

var coachesSchema = new mongoose.Schema({
    coachId: { type: String, unique: true },
    name: { type: String, required: [true, 'Required field'] },
    password: { type: String, required: [true, 'Required field'] },
    dateOfBirth: { type: String },
    gender: { type: String },
    mobileNumber: { type: Number },
    speciality: { type: String },
});
var coachesModel = mongoose.model("coaches", coachesSchema);

module.exports = coachesModel;