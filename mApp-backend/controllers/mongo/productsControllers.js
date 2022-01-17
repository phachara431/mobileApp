const products = require("../../model/mongo/products.js");

exports.insert = async (req, res, next) => {
    //console.log (req.body.product_id);
    //console.log(req.body.product_name);
    //console.log(+req.body.product_price);

    let data = new products({
        products_id: req.body.product_id,
        products_name: req.body.product_name,
        products_price: +req.body.product_price

    });
    data.save();
    res.status(200).json({
        message: "เพิ่มข้อมูลสินค้าเรียบร้อยแล้ว"
    });

}