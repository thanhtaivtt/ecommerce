"use trick"
exports.getView = (req,res) => {
    let data = {
        title: "Login"
    }
    res.render('clients/login', data)
}