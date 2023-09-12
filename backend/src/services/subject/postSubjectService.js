const { postSubject } = require("../../repositories/subjectRepository/postSubjectRepository");
const logger = require('../../utils/logger');

const postSubjectService = async (data) => {
  try {
    logger.info("postSubjectService - Posting subject to the database"); 
    await postSubject(data);
    logger.info("postSubjectService - Subject posted successfully!");
    return data
  } catch (error) {
    logger.error("postSubjectService - Error posting subject: ", error);
    throw error;
  }
};

module.exports = postSubjectService;
