const requestApplicantService = require('../../services/01-reuest/requestApplicantService');
const logger = require('../../config/winston/logger');
const requestIp = require('request-ip');

exports.createRequestApplicant= async (req, res) => {
    /*
    #swagger.description = "새로운 의뢰 지원자 정보 추가"
    #swagger.tags = ['requestApplicant - 의뢰 지원자 정보 테이블']
    #swagger.parameters['obj'] = {
        in: 'body',
        required: true,
        schema: {
            "request_idx": 1,
            "user_idx": 2,
            "applicant_state": "대기",
            "applicant_intro": "안녕하십니까"
        }
    }
    */
    try{
        logger.info(`${requestIp.getClientIp(req)} PUT /api/requestApplicant`);
        const RequestApplicant = await requestApplicantService.createRequestApplicant(req.body);
        res.status(201).json(RequestApplicant);
    } catch (e){
        logger.error(`${requestIp.getClientIp(req)} PUT /api/requestApplicant 500 ERROR: ${e.message}`);
        res.status(500).json({message: e.message});
    }
};

exports.getAllRequestApplicants = async (req, res) => {
    /*
    #swagger.description = "의뢰 지원자 정보 전체 조회"
    #swagger.tags = ['requestApplicant - 의뢰 지원자 정보 테이블']
    */
    try{
        logger.info(`${requestIp.getClientIp(req)} POST /api/requestApplicant/all`);
        const RequestApplicant = await requestApplicantService.getAllRequestApplicants();
        res.json(RequestApplicant);
    } catch (e){
        logger.error(`${requestIp.getClientIp(req)} POST /api/requestApplicant/all 500 ERROR: ${e.message}`);
        res.status(500).json({message: e.message});
    }
}

exports.getFetchRequestInfosByUser = async (req, res) => {
    /*
    #swagger.description = "특정 사용자가 지원한 의뢰 조회"
    #swagger.tags = ['requestApplicant - 의뢰 지원자 정보 테이블']
    #swagger.parameters['obj'] = {
        in: 'body',
        required: true,
        schema: {
            "user_idx": 2,
            "page": 1,
            "limit": 10
        }
    }
    */
    try{
        logger.info(`${requestIp.getClientIp(req)} POST /api/requestApplicant/applyRequest`);
        const RequestApplicant = await requestApplicantService.getFetchRequestInfosByUser(req.body.user_idx, req.body);
        res.json(RequestApplicant);
    } catch (e){
        logger.error(`${requestIp.getClientIp(req)} POST /api/requestApplicant/applyRequest 500 ERROR: ${e.message}`);
        res.status(500).json({message: e.message});
    }
}

exports.getApplicantInfoByUser = async (req, res) => {
    /*
    #swagger.description = "특정 사용자의 의뢰에 지원한 지원자 조회"
    #swagger.tags = ['requestApplicant - 의뢰 지원자 정보 테이블']
    #swagger.parameters['obj'] = {
        in: 'body',
        required: true,
        schema: {
            "user_idx": 3,
            "page": 1,
            "limit": 10,
            "status": "대기"
        }
    }
    */
    try{
        logger.info(`${requestIp.getClientIp(req)} POST /api/requestApplicant/getApplicant`);
        const RequestApplicant = await requestApplicantService.getApplicantInfoByUser(req.body.user_idx, req.body);
        res.json(RequestApplicant);
    } catch (e){
        logger.error(`${requestIp.getClientIp(req)} POST /api/requestApplicant/getApplicant 500 ERROR: ${e.message}`);
        res.status(500).json({message: e.message});
    }
}

exports.getAcceptedApplicantByUser = async (req, res) => {
    /*
    #swagger.description = "특정 사용자가 지원한 의뢰중 승인된 의뢰 목록 조회"
    #swagger.tags = ['requestApplicant - 의뢰 지원자 정보 테이블']
    #swagger.parameters['obj'] = {
        in: 'body',
        required: true,
        schema: {
            "user_idx": 1
        }
    }
    */
    try{
        logger.info(`${requestIp.getClientIp(req)} POST /api/requestApplicant/getAccepted`);
        const RequestApplicant = await requestApplicantService.getAcceptedApplicantByUser(req.body.user_idx);
        if(!RequestApplicant.length){
            return res.json([]);
        }
        res.json(RequestApplicant);
    } catch (e){
        logger.error(`${requestIp.getClientIp(req)} POST /api/requestApplicant/getAccepted 500 ERROR: ${e.message}`);
        res.status(500).json({message: e.message});
    }
}

exports.getFinishedApplicantByUser = async (req, res) => {
    /*
    #swagger.description = "특정 사용자가 지원하여 승인된 의뢰중 완료된 의뢰 목록 조회"
    #swagger.tags = ['requestApplicant - 의뢰 지원자 정보 테이블']
    #swagger.parameters['obj'] = {
        in: 'body',
        required: true,
        schema: {
            "user_idx": 1
        }
    }
    */
    try{
        logger.info(`${requestIp.getClientIp(req)} POST /api/requestApplicant/getFinished`);
        const RequestApplicant = await requestApplicantService.getFinishedApplicantByUser(req.body.user_idx);
        if(!RequestApplicant.length){
            return res.json([]);
        }
        res.json(RequestApplicant);
    } catch (e){
        logger.error(`${requestIp.getClientIp(req)} POST /api/requestApplicant/getFinished 500 ERROR: ${e.message}`);
        res.status(500).json({message: e.message});
    }
}

exports.getManyApplicantForThisRequest = async (req, res) => {
    /*
    #swagger.description = "특정 의뢰에 대한 지원자 목록 조회"
    #swagger.tags = ['requestApplicant - 의뢰 지원자 정보 테이블']
    #swagger.parameters['obj'] = {
        in: 'body',
        required: true,
        schema: {
            "request_idx": 1
        }
    }
    */
    try{
        logger.info(`${requestIp.getClientIp(req)} POST /api/requestApplicant/howManyApplicant`);
        const RequestApplicant = await requestApplicantService.getManyApplicantForThisRequest(req.body.request_idx);
        if(!RequestApplicant.length){
            return res.json([]);
        }
        res.json(RequestApplicant);
    } catch (e){
        logger.error(`${requestIp.getClientIp(req)} POST /api/requestApplicant/howManyApplicant 500 ERROR: ${e.message}`);
        res.status(500).json({message: e.message});
    }
}

exports.updateRequestApplicant = async (req, res) => {
    /*
    #swagger.description = "의뢰 지원자 정보 갱신"
    #swagger.tags = ['requestApplicant - 의뢰 지원자 정보 테이블']
    #swagger.parameters['obj'] = {
        in: 'body',
        required: true,
        schema: {
            "request_idx": 1,
            "user_idx": 2,
            "applicant_state": "대기",
            "applicant_intro": "한곡 뽑아보겠습니다!"
        }
    }
    */
    try{
        logger.info(`${requestIp.getClientIp(req)} POST /api/requestApplicant/update`);
        const RequestApplicant = await requestApplicantService.updateRequestApplicant(req.body);
        res.json(RequestApplicant);
    } catch (e){
        logger.error(`${requestIp.getClientIp(req)} POST /api/requestApplicant/update 500 ERROR: ${e.message}`);
        res.status(500).json({message: e.message});
    }
}

exports.updateRequestAllApplicantForReject = async (req, res) => {
    /*
    #swagger.description = "특정 의뢰에 지원한 사람들을 모두 반려(의뢰의 지원자 중 특정 user_idx를 선택하여 넣어주면 그 외에 user_idx데이터는 모두 반려처리)"
    #swagger.tags = ['requestApplicant - 의뢰 지원자 정보 테이블']
    #swagger.parameters['obj'] = {
        in: 'body',
        required: true,
        schema: {
            "request_idx": 1,
            "user_idx": 1,
        }
    }
    */
    try{
        logger.info(`${requestIp.getClientIp(req)} POST /api/requestApplicant/rejectAll`);
        const RequestApplicant = await requestApplicantService.updateRequestAllApplicantForReject(req.body);
        res.json(RequestApplicant);
    } catch (e){
        logger.error(`${requestIp.getClientIp(req)} POST /api/requestApplicant/rejectAll 500 ERROR: ${e.message}`);
        res.status(500).json({message: e.message});
    }
}