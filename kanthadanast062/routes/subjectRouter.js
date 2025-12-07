const express = require("express");
const controller = require("../controllers/subjectController");

const router = express.Router();

router.get("/", controller.getSubjects);
router.get("/:id", controller.getSubjectById);

module.exports = router;
