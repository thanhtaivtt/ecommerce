var home = require('../controllers/homeController.js');
module.exports = (app) => {
    app.get('/',home.getHome);
    app.get('/index.html',home.getHome);
    app.get('/quick_view.html',home.detail)
}