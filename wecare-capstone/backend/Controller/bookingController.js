const bookingsModel = require('../Model/bookings');
const usersModel = require('../Model/users');
const coachesModel = require('../Model/coaches');
const generator = require('../Model/IDGenerator');

exports.newBooking = async (req, res) => {
    try {
        const user = await usersModel.find({ userId: req.params.userId }, { _id: 0, __v: 0 });
        const coach = await coachesModel.find({ coachId: req.params.coachId }, { _id: 0, __v: 0 });
        const booking = await bookingsModel.find({ DateOfAppointment: req.body.DateOfAppointment, slot: req.body.slot })
        console.log(user);
        console.log(coach);
        console.log(booking);
        if (user.length === 0) {
            let err = new Error("UserId doesn't exists");
            err.status = 400;
            throw err;
        }
        if (coach.length === 0) {
            let err = new Error("coachId doesn't exists");
            err.status = 400;
            throw err;
        }
        if (booking.length !== 0) {
            let err = new Error("There is an appointment in this slot already");
            err.status = 400;
            throw err;
        }
        const Id = generator.generateBookingId();
        await bookingsModel.create({
            bookingId: Id,
            userId: req.params.userId,
            coachId: req.params.coachId,
            DateOfAppointment: req.body.DateOfAppointment,
            slot: req.body.slot
        });
        res.status(201).json({
            message: Id
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

exports.getCoachBooking = async (req, res) => {
    try {
        console.log(req.params.coachId)
        const bookings = await bookingsModel.find({ coachId: req.params.coachId }, { _id: 0, __v: 0 });
        if (bookings.length > 0) {
            res.status(200).send(bookings);
        } else {
            res.status(400).json({ message: 'Could not find any bookings' });
        }
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
};

exports.getUserBooking = async (req, res) => {
    try {
        console.log(req.params.userId)
        const bookings = await bookingsModel.find({ userId: req.params.userId }, { _id: 0, __v: 0 });
        if (bookings.length > 0) {
            res.status(200).send(bookings);
        } else {
            res.status(400).json({ message: 'Could not find any appointment details' });
        }
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
};

exports.updateBooking = async (req, res) => {
    try {
        const booking = await bookingsModel.find({ DateOfAppointment: req.body.DateOfAppointment, slot: req.body.slot });
        if (booking.length !== 0) {
            let err = new Error("There is an appointment in this slot already");
            err.status = 400;
            throw err;
        } else {
            bookingsModel.findOneAndUpdate(

                { bookingId: req.params.bookingId },
                { $set: { slot: req.body.slot, DateOfAppointment: req.body.DateOfAppointment } },
                {
                    new: true, //to return new doc back
                    runValidators: true, //to run the validators which specified in the model
                }, function (err, doc) {
                    if (err) {
                        console.log(err);
                        //throw err;
                    }
                    if (doc == null) {
                        res.status(400).json(false);
                        return;
                    }
                    console.log(doc);
                    res.status(200).json(true);
                }
            );
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteBooking = async (req, res) => {
    const delDet = await bookingsModel.deleteOne({ bookingId: req.params.bookingId });
    //console.log(delDet)
    if (delDet.deletedCount === 0) {
        res.status(404).json({ message: 'Could not delete this appointment' });
    } else {
        res.status(200).json(true);
    }
};