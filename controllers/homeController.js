exports.getHome = (req,res)=>
{
        var data = {
            title: "Home"
        }
        res.render("clients/index", data);
}
exports.detail = (req, res) => {
    res.render("clients/quick_view");
}