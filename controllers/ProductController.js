"use strict"
// quick view
exports.quickDetail = (req, res) => {
    res.render("clients/quick_view");
}
// detail
exports.detail = (req, res) =>{
    var data = {
        title: "Detail Product"
    }
    res.render("clients/product_detail", data);
}

// exports.detail = (req, res) =>{
//     var data = {
//         title: "Detail Product"
//     }
//     res.render("clients/grid", data);
// }