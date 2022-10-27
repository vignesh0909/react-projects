//bookings schema
const mongoose = require('mongoose');

var bookingsSchema = new mongoose.Schema({
  bookingId: {type: String},
  userId: { type: String },
  coachId: { type: String },
  DateOfAppointment: { type: String },
  slot: { type: String },
});

var bookingsModel = mongoose.model("bookings", bookingsSchema);

module.exports = bookingsModel;