const users = require("../../models/mongo/users.js");

exports.insert = async (req, res, next) => {
    let data = new users({
        email: "teaw2525@gmail.com",
        name: "พัชรมณี",
        lastname: "เกตุขวง"
    });

    data.save();
    res.status(200).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });
}