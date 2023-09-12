const postSubjectService = require('../../services/subject/postSubjectService');
const logger = require('../../utils/logger');

const postSubjectController = async (req, res) => {
    logger.info('postSubjectController - Req', req);
    try {
        logger.info("postSubjectController - Posting subject");
        if(req.body.id === undefined || req.body.name === undefined ||
            req.body.description === undefined || req.body.credits === undefined ||
            req.body.proffesor === undefined){
            return res.status(500).json({
                success: false,
                message: 'The data is not correct',
                error: "Incorrect data"
            });
        }
        await postSubjectService(req.body);
        logger.info("postSubjectController - Subject Posted");
        return res.status(200).json({
            success: true,
            message: 'Subject posted successfully'
        });
    } catch (error) {
        logger.info("postSubjectController - Error while posting subject");
        return res.status(500).json({
            success: false,
            message: 'Error posting subject',
            error: error.message
        });
    }
    
};

module.exports = postSubjectController;