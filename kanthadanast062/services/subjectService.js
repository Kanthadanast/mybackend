const repository = require("../repositories/subjectRepository");

module.exports = {
    findAll: async function ({ includeCourses = false, page = 1, pageSize = 10, sortField = "id", sortOrder = "asc" } = {}) {
        return await repository.findAll({ includeCourses, page, pageSize, sortField, sortOrder });
    },
    findById: async function (fid) {
        return await repository.findById(fid);
    }
};