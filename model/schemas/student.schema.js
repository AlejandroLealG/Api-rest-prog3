//packages
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true,
        unique:true
    },
    name:{
        type: "String",
        required: true
    },
    lastname:{
        type: "String",
        required: true
    },
    email:{
        type: "String",
        required: true,
        unique:true
    },
    phone:{
        type: "String",
        required: true
    },
    career:{
        type: "String",
        required: true
    }
});

module.exports = studentSchema;