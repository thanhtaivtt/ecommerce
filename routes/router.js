"use trick"
var home = require('../controllers/homeController.js');
var product = require('../controllers/ProductController.js');
var categories = require('../controllers/CategoriesController.js');
var login = require('../controllers/LoginController.js');
module.exports = (app) => {
    //Home
    app.get('/',home.getHome);
    app.get('/index.html',home.getHome);
    //Quick
    app.get('/quick_view.html',product.quickDetail);
    app.get('/product_detail.html',product.detail);
    //cate
    app.get('/grid.html', categories.getCate);
    //login
    app.get('/login.html', login.getView)
}