const updateSubjectService = require('../../services/subject/updateSubjectService');
const logger = require('../../utils/logger');

const updateSubjectController = async (req, res) => {
    logger.info('updateSubjectController - Req', req);
    try {
        logger.info("updateSubjectController - Updating subject");
        const subjects = await updateSubjectService();
        logger.info("updateSubjectController - Subject updated");
        return res.status(200).json({
            success: true,
            message: 'Subject updated successfully',
            data: subjects
        });
    } catch (error) {
        logger.info("updateSubjectController - Error while updating subject");
        return res.status(500).json({
            success: false,
            message: 'Error updating subject',
            error: error.message
        })
    }
    
};

module.exports = updateSubjectController;