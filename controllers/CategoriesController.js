"use trick"
exports.getCate = (req, res) => {
    let data = {
        title: "Danh Mục"
    };
    res.render('clients/grid', data);
}