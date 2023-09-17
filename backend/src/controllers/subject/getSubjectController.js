const { getSubjectService } = require('../../services/subject/getSubjectService');
const { getSubjectByIdService } = require('../../services/subject/getSubjectService');
const logger = require('../../utils/logger');

const getSubjectController = async (req, res) => {
    logger.info(`getSubjectController - Req `, req);
    try {
        logger.info("Subject Controller - Getting one/all subjects");
        let subjects;
        if (req.params.id === null || req.params.id === undefined) {
            subjects = await getSubjectService();
        } else {
            subjects = await getSubjectByIdService(req.params.id);
        }
        logger.info("Subject Controller - One/All Subjects gotten");
        return res.status(200).json({
            success: true,
            message: 'One/All Subjects retrieved successfully',
            data: subjects
        });
    } catch (error) {
        logger.info("Subject Controller - Error while getting one/all subjects");
        return res.status(500).json({
            success: false,
            message: 'Error retrieving one/all subjects',
            error: error.message
        })
    }

};

module.exports = getSubjectController;