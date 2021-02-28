//packages
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

// app configuration
const app = express();
const port = config.get("server-port");
const jsonPArser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({
    extended: true
});

app.use(jsonPArser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getipAddress");
app.use("*", ipFn);

//Methods
app.get("/", (req, res, nest) => {
    res.send("welcome to academic web api.");
});

//User routes
const userRoutes = require("./routes/user.routes");
userRoutes(app);

//token middleware
tkFn = require("./middleware/verifyToken");
app.user(tkFn)

//Student routes
const studentRoutes = require("./routes/student.routes");
studentRoutes(app);

//Teacher routes
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app);

//Period routes
const periodRoutes = require("./routes/period.routes");
periodRoutes(app);

//Course routes
const courseRoutes = require("./routes/course.routes");
courseRoutes(app);


app.listen(port, () => {
    console.log("Server is running...");
});
