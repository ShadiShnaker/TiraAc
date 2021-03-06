//var createError = require("http-errors");
var express = require("express");
//var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
//var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var meetingsRouter = require("./routes/meetings");
var mailRouter = require("./routes/mailing");
var eventRouter = require("./routes/event");
const mongoonse = require("mongoose");
var http = require("http");
var app = express();
var server = http.createServer(app);
const env = require("dotenv/config");

const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200,
};

server.listen("9000", () => {
    console.log("server is running");
});

mongoonse.connect(
    process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) return console.log(err.message);
        console.log("Connected to DB!");
    }
);

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

//app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/meetings", meetingsRouter);
app.use("/mail", mailRouter);
app.use("/event", eventRouter);
// catch 404 and forward to error handler

// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// app.use(async function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000')

//   // Request methods you wish to allow
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   //await res.send();

//   // Pass to next layer of middleware
//   next();
// });

module.exports = app;
