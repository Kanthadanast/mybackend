const service = require("../services/subjectService");

const getSubjects = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const sortBy = req.query.sortBy || "id";
        const order = req.query.order === "desc" ? "desc" : "asc";
        const result = await service.findAll({
            page,
            pageSize: limit,
            sortField: sortBy,
            sortOrder: order,
            includeCourses: true
        });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "500 : Server error ja" });
    }
};

const getSubjectById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const subject = await service.findById(id);
        if (!subject) return res.status(404).json({ message: "Subject not found" });
        res.json(subject);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getSubjects,
    getSubjectById
};
