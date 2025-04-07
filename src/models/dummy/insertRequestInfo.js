const RequestInfo = require('@src/models/01-request/RequestInfo');
const esClient = require('@src/config/esClient');

const insertRequestInfo = async () => {
    const requests = await RequestInfo.bulkCreate([
        {
            "user_idx": 1,
            "request_region": "경남 김해",
            "request_title": "오전 중 창고정리",
            "request_content": "오전 중에 야채창고 정리할 인력 다섯분 구합니다. 야리끼리로 처리되고 일당은 7만원입니다. 오후에 창고물자 입고랑 연계 신청가능합니다",
            "request_cost": 70000,
            "request_state": "완료",
            "created_date": "2024-07-29",
            "updated_time": "2024-07-29",
        },{
            "user_idx": 1,
            "request_region": "경남 김해",
            "request_title": "오후 중 창고물자 입고",
            "request_content": "오후 중에 창고에 물자 입고할 인력 10명 구합니다. 야리끼리로 처리되고 일당은 10만원입니다. 오전 정리일 일당이랑 별개입니다.",
            "request_cost": 100000,
            "request_state": "모집",
            "created_date": "2024-07-29",
            "updated_time": "2024-07-29"
        },{
            "user_idx": 3,
            "request_region": "창원",
            "request_title": "행사장 관리",
            "request_content": "광복절 기념 행사 관리인력 모집합니다. 오전중으로만 진행되고 9시부터 12까지 진행됩니다. (중식 제공포함)",
            "request_cost": 50000,
            "request_state": "모집완료",
            "created_date": "2024-08-01",
            "updated_time": "2024-08-01"
        },{
            "user_idx": 4,
            "request_region": "울산",
            "request_title": "자동차 공장 단기알바",
            "request_content": "2주 동안 현대차 생산라인에서 일할 분 모집합니다. 모집인원 0명, 중식과 석식 제공",
            "request_cost": 250000,
            "request_state": "모집중",
            "request_category": "알바",
            "created_date": "2024-07-14",
            "updated_time": "2024-07-14"
        },{
            "user_idx": 5,
            "request_region": "부산",
            "request_title": "엑스포 안내 인원",
            "request_content": "3일 동안 엑스포에서 행사장 안내하실분 구합니다. 이전 행사안내에 참여하신분 우대합니다.(중식 제공)",
            "request_cost": 50000,
            "request_state": "모집예정",
            "created_date": "2024-08-20",
            "updated_time": "2024-08-20"
        },{
            "user_idx": 1,
            "request_region": "포항",
            "request_title": "엑스포 안내 인원",
            "request_content": "3일 동안 엑스포에서 행사장 안내하실분 구합니다. 이전 행사안내에 참여하신분 우대합니다.(중식 제공)",
            "request_cost": 50000,
            "request_state": "모집예정",
            "created_date": "2024-08-20",
            "updated_time": "2024-08-20"
        },{
            "user_idx": 1,
            "request_region": "포항",
            "request_title": "엑스포 안내 인원",
            "request_content": "3일 동안 엑스포에서 행사장 안내하실분 구합니다. 이전 행사안내에 참여하신분 우대합니다.(중식 제공)",
            "request_cost": 50000,
            "request_state": "모집예정",
            "created_date": "2024-08-20",
            "updated_time": "2024-08-20"
        },{
            "user_idx": 1,
            "request_region": "서울",
            "request_title": "인턴 면접 공고",
            "request_content": "대한 캐피탈에서 인턴을 모집합니다.",
            "request_cost": 50000,
            "request_state": "모집예정",
            "request_category": "인턴",
            "created_date": "2024-08-20",
            "updated_time": "2024-08-20"
        },{
            "user_idx": 6,
            "request_region": "대구광역시 중구",
            "request_title": "배송 물품 포장",
            "request_content": "제목이랑 같습니다",
            "request_cost": 20000,
            "request_state": "모집",
            "applicant_idx": 377,
            "created_date": "2024-08-20",
            "updated_time": "2024-08-20"
        },{
            "user_idx": 7,
            "request_region": "울산광역시 남구",
            "request_title": "간단한 서류 정리",
            "request_content": "제목이랑 같습니다",
            "request_cost": 20000,
            "request_state": "모집",
            "applicant_idx": 921,
            "created_date": "2024-08-20",
            "updated_time": "2024-08-20"
        },{
            "user_idx": 8,
            "request_region": "인천광역시 미추홀구",
            "request_title": "마트 상품 정리",
            "request_content": "제목이랑 같습니다",
            "request_cost": 20000,
            "request_state": "모집",
            "applicant_idx": 642,
            "created_date": "2024-08-20",
            "updated_time": "2024-08-20"
        },
    ]);
    for(const request of requests){
        await esClient.index({
            index: 'request_info',
            id: request.request_idx,
            body: request
        });
    }
    return requests;
}

module.exports = insertRequestInfo;