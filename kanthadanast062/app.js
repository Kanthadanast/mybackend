const express = require("express");
const createError = require("http-errors");
const subjectRouter = require("./routes/subjectRouter");
const courseRouter = require("./routes/courseRouter");
const courseStudentRouter = require("./routes/courseStudentRouter");
const app = express();

app.use(express.json());
app.use("/a-062/api/subjects", subjectRouter);
app.use("/a-062/api/courses", courseRouter);
app.use("/a-062/api", courseStudentRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    const status = err.status || 500;
    const errorCode = err.code || (err.message.toUpperCase().replace(/ /g, '_'));
    res.status(status);
    res.json({
        error: errorCode,
        status: status,
        message: err.message,
        resource: req.originalUrl,
        timestamp: new Date().toLocaleString(),
        ...(err.errors && {errors: err.errors}),
    });
});

module.exports = app;
