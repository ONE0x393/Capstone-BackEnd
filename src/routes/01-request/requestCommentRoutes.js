const express = require('express');
const interestRequestController = require('../../controllers/01-request/requestCommentController');

const router = express.Router();

/**
 * 새로운 의뢰글 댓글 삽입
 */
router.put('/', interestRequestController.createRequestComment);
/**
 * 모든 의뢰글 댓글 정보 조회
 */
router.post('/all', interestRequestController.getAllRequestComments);
/**
 * 특정 의뢰글 댓글 조회
 */
router.post('/', interestRequestController.getRequestCommentsByIDX);
/**
 * 의뢰글 댓글 수정
 */
router.post('/update', interestRequestController.updateRequestComment);
/**
 * 의뢰글 댓글 삭제
 */
router.delete('/delete', interestRequestController.deleteRequestComment);


module.exports = router;