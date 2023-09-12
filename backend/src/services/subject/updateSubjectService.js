const { updateSubjectById } = require("../../repositories/subjectRepository/updateSubjectByIdRepository");
const logger = require('../../utils/logger');

const updateSubjectService = async (id,data) => {
  try {
    logger.info("updateSubjectService - Updating subject from the database"); 
    const users = await updateSubjectById(id,data);
    logger.info("updateSubjectService - Subject updated successfully!");
  } catch (error) {
    logger.error("updateSubjectService - Error updating subject: ", error);
    throw error;
  }
};

module.exports = updateSubjectService;
