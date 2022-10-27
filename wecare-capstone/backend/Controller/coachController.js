
const coachesModel = require('../Model/coaches');
const validators = require('../Utilities/validator');
const generator = require('../Model/IDGenerator');


exports.newCoach = async (req, res) => {
    try {
        let checkCoach = await coachesModel.find({ name: req.body.name });
        //console.log(emailCheck);
        if (checkCoach.length > 0) {
            console.log(checkCoach);
            let err = new Error("Coach exists with this name");
            err.status = 400;
            throw err;
        }
        else if (validators.ValidateName(req.body.name) && validators.ValidatePassword(req.body.password) && validators.ValidateMobile(req.body.mobileNumber)
            && validators.ValidateGender(req.body.gender) && validators.ValidateSpeciality(req.body.speciality)) {
            const Id = generator.generateCoachId();
            await coachesModel.create({
                coachId: Id,
                name: req.body.name,
                password: req.body.password,
                gender: req.body.gender,
                dateOfBirth: req.body.dateOfBirth,
                mobileNumber: req.body.mobileNumber,
                speciality: req.body.speciality
            });
            res.status(200).json({
                message: `New Coach with Id:${Id} is added`
            });
        } else {
            res.status(400).json({ message: "Fail" })
        }
    }
    catch (err) {
        console.log(err);
        res.status(201).send({ message: err.message });
    }
};

exports.coachLogin = async (req, res) => {
    let invalidUser = false;
    coachesModel.findOne({ coachId: req.body.coachId })
        .then((user) => {
            if (!user) {
                invalidUser = true;
                return res.send({
                    message: "Incorrect coach id or password",
                });
            }
            return req.body.password === user.password;
        })
        .then((result) => {
            if (!result) {
                invalidUser = true;
                return res.send({
                    message: "Incorrect coach id or password",
                });
            } else if (!invalidUser) {
                res.status(200).send(true);
            }
        })
        .catch((err) => {
            console.log(err);
            return res.status(401).json({
                message: "Auth Failed",
            });
        });
};

exports.getCoaches = async (req, res) => {
    try {
        const coaches = await coachesModel.find({}, { _id: 0, __v: 0 });
        if (coaches.length > 0) {
            res.status(200).send(coaches);
        } else {
            res.status(400).json({
                status: 'success',
                data: {
                    message: 'No coach available in the DB',
                },
            });
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.getCoach = async (req, res) => {
    try {
        if (coachesModel.findOne({ coachId: req.params.coachId }, { _id: 0, __v: 0 })) {
            const coach = await coachesModel.findOne({ coachId: req.params.coachId }, { _id: 0, __v: 0 });
            res.status(200).send(coach);
        } else {
            res.status(400).json({
                message: 'Coach Id does not exist',
            });
        }
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};