const service = require("../services/courseStudentService");

const deleteCourseStudent = async (req, res) => {
    try {
        const studentId = Number(req.params.studentId);
        const courseId = Number(req.params.courseId);

        if (isNaN(studentId) || isNaN(courseId)) {
            return res.status(400).json({ message: "studentId and courseId must be valid numbers" });
        }

        await service.deleteByStudentIdAndCourseId(studentId, courseId);
        res.status(200).json({ message: "CourseStudent record deleted successfully" });
    } catch (err) {
        console.error(err);
        if (err.message === "CourseStudent record not found") {
            return res.status(404).json({ message: err.message });
        }
        res.status(500).json({ message: "Server error" });
    }
};

const addCourseStudent = async (req, res) => {
    try {
        const studentId = Number(req.params.studentId);
        const courseId = Number(req.params.courseId);
        const grade = req.body.grade ? Number(req.body.grade) : null;

        if (isNaN(studentId) || isNaN(courseId)) {
            return res.status(400).json({ message: "studentId and courseId must be valid numbers" });
        }

        const courseStudent = await service.create(studentId, courseId, grade);
        res.status(201).json(courseStudent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    deleteCourseStudent,
    addCourseStudent
};

