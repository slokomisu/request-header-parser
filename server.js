var express = require('express');
var useragent = require('express-useragent');
var app = express();
app.use(useragent.express());

app.get('/api/whoami', (req, res) => {
    var agent = req.useragent['source'].split('(');
    var ip = req.ip;
    var os = agent[1].split(')')[0];
    var lang = req.get('Accept-Language').split(',')[0];

    var whoami = {
        ipaddress: ip,
        language: lang,
        software: os
    };
    res.json(whoami);


})
app.listen(process.env.PORT || 3000);