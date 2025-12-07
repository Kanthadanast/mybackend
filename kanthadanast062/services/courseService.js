const repository = require("../repositories/courseRepository");

module.exports = {
    findBySubjectId: async function (subjectId) {
        return await repository.findBySubjectId(subjectId);
    },
    create: async function (subjectId, year) {
        // Check for duplicate course in the same year
        const existingCourse = await repository.findBySubjectIdAndYear(subjectId, year);
        if (existingCourse) {
            throw new Error("Course already exists for this subject in the specified year");
        }
        return await repository.create(subjectId, year);
    },
    deleteById: async function (courseId) {
        // Check if the course exists
        const existing = await repository.findById(courseId);
        if (!existing) {
            throw new Error("Course not found");
        }
        return await repository.deleteById(courseId);
    }
};

