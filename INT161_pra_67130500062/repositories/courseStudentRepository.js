const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    deleteByStudentIdAndCourseId: async function (studentId, courseId) {
        return await prisma.course_student.delete({
            where: {
                course_id_student_id: {
                    course_id: courseId,
                    student_id: studentId
                }
            }
        });
    },
    findByStudentIdAndCourseId: async function (studentId, courseId) {
        return await prisma.course_student.findUnique({
            where: {
                course_id_student_id: {
                    course_id: courseId,
                    student_id: studentId
                }
            }
        });
    },
    create: async function (studentId, courseId, grade = null) {
        return await prisma.course_student.create({
            data: {
                student_id: studentId,
                course_id: courseId,
                grade: grade
            }
        });
    }
};

