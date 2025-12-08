const express = require("express");
const controller = require("../controllers/courseController");

const router = express.Router();

// GET courses by subject ID
router.get("/subject/:id", controller.getCoursesBySubjectId);

// POST add course
router.post("/", controller.addCourse);

// DELETE course by ID
router.delete("/:id", controller.deleteCourse);

module.exports = router;

