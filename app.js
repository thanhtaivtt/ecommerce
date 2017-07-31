//When I wrote this, only God and I understood what I was doing
//Now, God only knows
const express   = require('express'),
      app       = express();
var config      = require('./configs/config.js')(app, express),
    router      = require('./routes/router.js')(app);

app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'), () => {
    console.log('App running in port ' + app.get('port'));
})