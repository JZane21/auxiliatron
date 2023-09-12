const deleteSubjectService = require('../../services/subject/deleteSubjectService');
const logger = require('../../utils/logger');

const deleteSubjectController = async (req, res) => {
    logger.info('deleteSubjectController - Req', req);
    try {
        logger.info("deleteSubjectController - Deleting subject");
        await deleteSubjectService(req.body.id);
        logger.info("deleteSubjectController - Subject deleted");
        return res.status(200).json({
            success: true,
            message: 'Subject deleted successfully'
        });
    } catch (error) {
        logger.info("deleteSubjectController - Error while deleting subject");
        return res.status(500).json({
            success: false,
            message: 'Error deleting subject',
            error: error.message
        })
    }
    
};

module.exports = deleteSubjectController;