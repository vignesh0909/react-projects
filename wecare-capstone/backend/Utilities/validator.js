
exports.ValidateName = function (name) {
  if (name.trim().length > 0 && name.length >= 3 && name.length <= 50) {
    return true;
  } else {
    let err = new Error("Name should be have minimum 3 and maximum 50 characters");
    err.status = 400;
    throw err;
  }
};

exports.ValidatePassword = function (password) {
  if (password.length >= 5 && password.length <= 10) {
    return true;
  }
  let err = new Error("Password should have minimum 5 and maximum 10 characters");
  err.status = 400;
  throw err;
};

exports.ValidateAge = function (dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age >= 20 && age <= 100) {
    return true;
  } else {
    let err = new Error("Age should be greater than 20 and less than 100");
    err.status = 400;
    throw err
  }
};

exports.ValidateGender = function (gender) {
  if (gender === 'F' || gender === 'M') {
    return true;
  }
  let err = new Error("Gender should be either M or F");
  err.status = 400;
  throw err;
};

exports.ValidateMobile = function (mobile) {
  console.log(mobile)
  if (mobile.toString().length === 10) {
    return true;
  }
  let err = new Error("Mobile Number should have 10 digits");
  err.status = 400;
  throw err;
};

exports.ValidateEmail = function (email) {
  var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (mailformat.test(email)) {
    return true;
  }
  else {
    let err = new Error("Email should be a valid one");
    err.status = 400;
    throw err;
  }
};

exports.ValidatePincode = function (pincode) {
  if (pincode.toString().length === 6) {
    return true;
  }
  let err = new Error("Pincode should have 6 digits");
  err.status = 400;
  throw err;
};

exports.ValidateStateCountry = function (state, country) {
  if (state.length >= 3 && state.length <= 20 && country.length >= 3 && country.length <= 20) {
    return true;
  }
  return false;
};

exports.ValidateSpeciality = function (speciality) {
  console.log(speciality)
  if (speciality.length >= 10 && speciality.length <= 50) {
    return true;
  }
  let err = new Error("Specialty should have 10 to 50 characters");
  err.status = 400;
  throw err;
};