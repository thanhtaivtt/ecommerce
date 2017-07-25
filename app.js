const express = require('express');
const app = express();
var config = require('./configs/config.js')(app, express);
var router = require('./routes/router.js')(app);
app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'), () => {
    console.log('App running in port '+ app.get('port'));
})