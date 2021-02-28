exports.sendSMS = async (phone) => {
    let code = Math.random(10);
    console.log(`Sending SMS whit code ${code} o phone number ${phone}`);
};