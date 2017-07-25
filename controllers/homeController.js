exports.getHome = (req,res)=>
{
        var data = {
            title: "Home"
        }
        res.render("clients/index", data);
}
