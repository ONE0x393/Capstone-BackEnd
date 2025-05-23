const AlarmType = require('../../models/03-myPage/AlarmType');
const sequelize = require('../../config/database');

exports.createAlarmType = async (alarmData) => {
    return AlarmType.create(alarmData);
}

exports.getAllAlarmTypes = async () => {
    return await AlarmType.findAll();
}

exports.updateAlarmType = async (alarmData) => {

    return await AlarmType.update({
        receiver_user_idx: alarmData.receiver_user_idx,
        sender_user_idx: alarmData.sender_user_idx,
        alarm_type: alarmData.alarm_type,
        request_idx: alarmData.request_idx
    }, {
        where: {
            request_idx: alarmData.request_idx
        }
    });
}