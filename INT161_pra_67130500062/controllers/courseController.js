const service = require("../services/courseService");

const getCoursesBySubjectId = async (req, res) => {
    try {
        const subjectId = Number(req.params.id);
        if (isNaN(subjectId)) {
            return res.status(400).json({ message: "Invalid subject ID" });
        }
        const courses = await service.findBySubjectId(subjectId);
        res.json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

const addCourse = async (req, res) => {
    try {
        const { subjectId, year } = req.body;
        
        if (!subjectId || !year) {
            return res.status(400).json({ message: "subjectId and year are required" });
        }

        const subjectIdNum = Number(subjectId);
        const courseYear = Number(year);

        if (isNaN(subjectIdNum) || isNaN(courseYear)) {
            return res.status(400).json({ message: "subjectId and year must be valid numbers" });
        }

        const course = await service.create(subjectIdNum, courseYear);
        res.status(201).json(course);
    } catch (err) {
        console.error(err);
        if (err.message === "Course already exists for this subject in the specified year") {
            return res.status(409).json({ message: err.message });
        }
        res.status(500).json({ message: "Server error" });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const courseId = Number(req.params.id);
        
        if (isNaN(courseId)) {
            return res.status(400).json({ message: "Invalid course ID" });
        }

        await service.deleteById(courseId);
        res.status(200).json({ message: "Course deleted successfully" });
    } catch (err) {
        console.error(err);
        if (err.message === "Course not found") {
            return res.status(404).json({ message: err.message });
        }
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getCoursesBySubjectId,
    addCourse,
    deleteCourse
};

