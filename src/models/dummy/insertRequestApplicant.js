const RequestApplicant = require('@src/models/01-request/RequestApplicant');

const insertRequestApplicant = async () => {
    return RequestApplicant.bulkCreate([
        {
            "request_idx": 1,
            "user_idx": 2,
            "applicant_state": "승인"
        },{
            "request_idx": 2,
            "user_idx": 2,
            "applicant_state": "승인",
            "is_canceled": "1"
        },{
            "request_idx": 2,
            "user_idx": 8,
            "applicant_state": "대기"
        },{
            "request_idx": 6,
            "user_idx": 3,
            "applicant_state": "대기"
        },{
            "request_idx": 6,
            "user_idx": 5,
            "applicant_state": "대기"
        },{
            "request_idx": 4,
            "user_idx": 1,
            "applicant_state": "대기"
        },{
            "request_idx": 5,
            "user_idx": 32,
            "applicant_state": "대기"
        },{
            "request_idx": 6,
            "user_idx": 23,
            "applicant_state": "대기"
        },{
            "request_idx": 6,
            "user_idx": 45,
            "applicant_state": "대기"
        },{
            "request_idx": 6,
            "user_idx": 55556,
            "applicant_state": "대기"
        },{
            "request_idx": 6,
            "user_idx": 34556,
            "applicant_state": "승인"
        },{
            "request_idx": 6,
            "user_idx": 2346,
            "applicant_state": "대기"
        },{
            "request_idx": 6,
            "user_idx": 12684,
            "applicant_state": "대기"
        },{
            "request_idx": 6,
            "user_idx": 43244,
            "applicant_state": "대기"
        },{
            "request_idx": 6,
            "user_idx": 87554,
            "applicant_state": "대기"
        },{
            "request_idx": 6,
            "user_idx": 3859,
            "applicant_state": "대기"
        },
        {
            "request_idx": 7,
            "user_idx": 2,
            "applicant_state": "대기"
        },
        {
            "request_idx": 8,
            "user_idx": 2,
            "applicant_state": "대기"
        },
        {
            "request_idx": 9,
            "user_idx": 2,
            "applicant_state": "대기"
        },
        {
            "request_idx": 11,
            "user_idx": 2,
            "applicant_state": "대기"
        },
    ]);
}

module.exports = insertRequestApplicant;