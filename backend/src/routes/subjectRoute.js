const express = require('express');
const router = express.Router();
const getSubjectController = require("../controllers/subject/getSubjectController");
const deleteSubjectController = require("../controllers/subject/deleteSubjectController");
const postSubjectController = require("../controllers/subject/postSubjectController");
const updateSubjectController = require("../controllers/subject/updateSubjectController");

const routeSubject = "/subjects";

router.get(`${routeSubject}/:id`, getSubjectController);
router.get(`${routeSubject}`, getSubjectController);
router.post(routeSubject, postSubjectController);
router.delete(routeSubject, deleteSubjectController);
router.put(routeSubject, updateSubjectController);

module.exports = router;