const { deleteSubjectById } = require("../../repositories/subjectRepository/deleteSubjectByIdRepository");
const logger = require('../../utils/logger');

const deleteSubjectService = async (id) => {
  try {
    logger.info("deleteSubjectService - Deleting subject from the database"); 
    const subject = await deleteSubjectById(id);
    logger.info("deleteSubjectService - Subject deleted successfully!");
    return subject;
  } catch (error) {
    logger.error("deleteSubjectService - Error deleting subjects: ", error);
    throw error;
  }
};

module.exports = deleteSubjectService;
