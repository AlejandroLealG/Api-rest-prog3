// user: acad_rest_api_user
// pass: yO9WzcM4vz3rzK2l

// user2: admi_rest_api
// pass2: vVjzw52cEz9bSzZJ 


//packages
const mongoose = require("mongoose");
const config = require("config");

const mongodbInfo = config.get("db-connections.mongodb");

const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.hostmongodb}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(connStr);
    mongoose.connection.on("connected", () => {
        console.log("mongodb server connected!");
    });
    mongoose.connection.on("disconnected", () => {
        console.log("mongodb server disconnected!");
    });
    mongoose.connection.on("error", () => {
        console.log("mongodb server connection error!");
    });
    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(()=>{
            console.log("mongodb server shutting down!");
        });  
    });
    
}

