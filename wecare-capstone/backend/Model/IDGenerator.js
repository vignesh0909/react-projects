var usercount = 0;
var coachcount = 0;
var bookingcount = 0;

exports.generateUserId = () => {
    usercount++
    const Id = "UI-000"+usercount;
    console.log("Added"+Id);
    return Id;
}

exports.generateCoachId = () => {
    coachcount++
    const Id = "CI-000"+coachcount;
    console.log("Added"+Id);
    return Id;
}

exports.generateBookingId = () => {
    bookingcount++
    const Id = "BI-000"+bookingcount;
    console.log("Added"+Id);
    return Id;
}