var home = require('../controllers/homeController.js');
var product = require('../controllers/ProductController.js');
module.exports = (app) => {
    //Home
    app.get('/',home.getHome);
    app.get('/index.html',home.getHome);
    //Quick
    app.get('/quick_view.html',product.quickDetail);
    app.get('/grid.html',product.detail);
}