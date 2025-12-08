const express = require("express");
const controller = require("../controllers/courseStudentController");

const router = express.Router();

// POST add courseStudent (for testing purposes)
router.post("/students/:studentId/courses/:courseId", controller.addCourseStudent);

// DELETE courseStudent by student_id and course_id
router.delete("/students/:studentId/courses/:courseId", controller.deleteCourseStudent);

module.exports = router;

