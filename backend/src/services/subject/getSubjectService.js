const { getSubjectById } = require("../../repositories/subjectRepository/getSubjectByIdRepository");
const { getSubjects } = require("../../repositories/subjectRepository/getSubjectsRepository");
const logger = require('../../utils/logger');

const getSubjectService = async () => {
  try {
    logger.info("getSubjectService - Fetching subjects from the database");
    const subjects = await getSubjects();
    logger.info("getSubjectService - Subjects fetched successfully!");
    return subjects;
  } catch (error) {
    logger.error("getSubjectService - Error fetching subjects: ", error);
    throw error;
  }
};

const getSubjectByIdService = async (id) => {
  try {
    logger.info("getSubjectService - Fetching one subject from the database");
    const subject = await getSubjectById(id);
    logger.info("getSubjectService - One subject fetched successfully!");
    return subject;
  } catch (error) {
    logger.error("getSubjectService - Error fetching one subject: ", error);
    throw error;
  }
};

module.exports = {
  getSubjectService,
  getSubjectByIdService
};