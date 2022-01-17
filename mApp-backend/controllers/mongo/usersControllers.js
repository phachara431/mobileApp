const users = require("../../model/mongo/users.js");

exports.insert = async (req, res, next) => {
    let data = new users({
        email: "newsnail093@gmail.com",
        name: "Natdanai ",
        lastname: "Tinnakon"

    });
    data.save();
    res.status(200).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });

}