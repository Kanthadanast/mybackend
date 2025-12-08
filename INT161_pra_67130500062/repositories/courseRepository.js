const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    findBySubjectId: async function (subjectId) {
        return await prisma.courses.findMany({
            where: { subject_id: subjectId }
        });
    },
    findBySubjectIdAndYear: async function (subjectId, year) {
        return await prisma.courses.findFirst({
            where: {
                subject_id: subjectId,
                year: year
            }
        });
    },
    create: async function (subjectId, year) {
        return await prisma.courses.create({
            data: {
                subject_id: subjectId,
                year: year
            }
        });
    },
    findById: async function (courseId) {
        return await prisma.courses.findUnique({
            where: { id: courseId }
        });
    },
    deleteById: async function (courseId) {
        return await prisma.courses.delete({
            where: { id: courseId }
        });
    }
};

