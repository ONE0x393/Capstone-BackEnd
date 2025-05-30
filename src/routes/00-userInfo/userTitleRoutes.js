const express = require('express');
const userTitleController = require('../../controllers/00-userInfo/userTitleController');

const router = express.Router();

/**
 * 새로운 사용자 관계 생성
 */
router.put('/', userTitleController.createUserTitle);
/**
 * 사용자 관계 조회
 */
router.post('/', userTitleController.getUserTitles);
/**
 * 사용자 관계 삭제
 */
router.post('/update', userTitleController.updateUserTitle);

module.exports = router;