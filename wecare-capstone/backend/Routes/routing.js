const express = require('express');

const routing = express.Router();

const userController = require('../Controller/userController');
const coachController = require('../Controller/coachController');
const bookingController = require('../Controller/bookingController');
const invalidController = require('../Controller/invalidController');

routing.post('/users', userController.newUser); //

routing.post('/users/login', userController.userLogin); //

routing.post('/coaches', coachController.newCoach); //

routing.post('/coaches/login', coachController.coachLogin);

routing.post('/users/booking/:userId/:coachId', bookingController.newBooking);

routing.get('/coaches/all', coachController.getCoaches);

routing.get('/coaches/:coachId', coachController.getCoach);

routing.get('/users/:userId', userController.getUser);

routing.get('/coaches/booking/:coachId', bookingController.getCoachBooking);

routing.get('/users/booking/:userId', bookingController.getUserBooking);

routing.put('/booking/:bookingId', bookingController.updateBooking);

routing.delete('/booking/:bookingId', bookingController.deleteBooking);

routing.all('*', invalidController.invalid);

module.exports = routing;
