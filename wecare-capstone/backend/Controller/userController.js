const usersModel = require('../Model/users');
const validators = require('../Utilities/validator');
const generator = require('../Model/IDGenerator');

exports.newUser = async (req, res) => {
    try {
        let emailCheck = await usersModel.find({ email: req.body.email });
        //console.log(emailCheck);
        if (emailCheck.length > 0) {
            console.log(emailCheck);
            let err = new Error("Email already exists");
            err.status = 400;
            throw err;
        }
        else if (validators.ValidateName(req.body.name) && validators.ValidatePassword(req.body.password) && validators.ValidateMobile(req.body.mobileNumber)
            && validators.ValidateGender(req.body.gender) && validators.ValidateAge(req.body.dateOfBirth) && validators.ValidateEmail(req.body.email) && validators.ValidatePincode(req.body.pincode)) {
            const Id = generator.generateUserId();
            await usersModel.create({
                userId: Id,
                name: req.body.name,
                password: req.body.password,
                gender: req.body.gender,
                dateOfBirth: req.body.dateOfBirth,
                email: req.body.email,
                mobileNumber: req.body.mobileNumber,
                pincode: req.body.pincode,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
            });
            res.status(200).json({
                message: Id
            });
        } else {
            res.status(201).json({ message: "Failed" })
        }
    }
    catch (err) {
        console.log(err);
        res.status(201).json({ message: err.message });
    }
};

exports.userLogin = async (req, res) => {
    let invalidUser = false;
    usersModel.findOne({ userId: req.body.userId })
        .then((user) => {
            if (!user) {
                invalidUser = true;
                return res.send({
                    message: "User not registered!",
                });
            }
            return req.body.password === user.password;
        })
        .then((result) => {
            if (!result) {
                invalidUser = true;
                return res.send({
                    message: "Incorrect Password",
                });
            } else if (!invalidUser) {
                res.status(200).json(true);
            }
        })
        .catch((err) => {
            console.log(err);
            return res.status(401).json({
                message: "Auth Failed",
            });
        });
};

exports.getUser = async (req, res) => {
    try {
        if (usersModel.findOne({ userId: req.params.userId }, { _id: 0, __v: 0 })) {
            console.log(req.params.userId);
            const user = await usersModel.find({ userId: req.params.userId }, { _id: 0, __v: 0 });
            console.log(user);
            res.status(200).send(user);
        } else {
            res.status(400).json({
                message: 'User Id does not exist',
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