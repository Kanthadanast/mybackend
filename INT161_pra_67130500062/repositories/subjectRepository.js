const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
module.exports = {
    findAll: async function({ includeCourses = false, page = 1, pageSize = 10, sortField = "id", sortOrder = "asc" } = {}) {
        const totalItems = await prisma.subjects.count();
        const data = await prisma.subjects.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize,
            include: includeCourses ? { courses: true } : undefined,
            orderBy: {
                [sortField]: sortOrder
            }
        });
        return {
            data,
            pageInfo: {
                page,
                pageSize,
                totalItems,
                totalPages: Math.ceil(totalItems / pageSize)
            }
        };
    },
    findById: async function (fid) {
        return await prisma.subjects.findUnique({
            where: { id: fid },
            include: { courses: true }
        });
    }
};
