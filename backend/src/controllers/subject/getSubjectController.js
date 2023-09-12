const { getSubjectService } = require('../../services/subject/getSubjectService');
const { getSubjectByIdService } = require('../../services/subject/getSubjectService');
const logger = require('../../utils/logger');

const getSubjectController = async (req, res) => {
    logger.info('getSubjectController - Req', req);
    try {
        logger.info("Subject Controller - Getting subjects");
        const subjects = await getSubjectService();
        logger.info("Subject Controller - Subjects gotten");
        return res.status(200).json({
            success: true,
            message: 'Subjects retrieved successfully',
            data: subjects
        });
    } catch (error) {
        logger.info("Subject Controller - Error while getting subjects");
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subjects',
            error: error.message
        })
    }
    
};

const getSubjectByIdController = async (req, res) => {
    logger.info('getSubjectController - Req', req);
    try {
        logger.info("Subject Controller - Getting subject");
        const subject = await getSubjectByIdService(req.body.id);
        logger.info("Subject Controller - Subject gotten");
        return res.status(200).json({
            success: true,
            message: 'Subjects retrieved successfully',
            data: subject
        });
    } catch (error) {
        logger.info("Subject Controller - Error while getting subject");
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subjects',
            error: error.message
        })
    }
    
};

module.exports = {
    getSubjectController,
    getSubjectByIdController
};