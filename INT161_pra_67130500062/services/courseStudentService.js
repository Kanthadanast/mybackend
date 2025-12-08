const repository = require("../repositories/courseStudentRepository");

module.exports = {
    deleteByStudentIdAndCourseId: async function (studentId, courseId) {
        // Check if the record exists
        const existing = await repository.findByStudentIdAndCourseId(studentId, courseId);
        if (!existing) {
            throw new Error("CourseStudent record not found");
        }
        return await repository.deleteByStudentIdAndCourseId(studentId, courseId);
    },
    create: async function (studentId, courseId, grade = null) {
        // Check if the record already exists
        const existing = await repository.findByStudentIdAndCourseId(studentId, courseId);
        if (existing) {
            throw new Error("CourseStudent record already exists");
        }
        return await repository.create(studentId, courseId, grade);
    }
};

