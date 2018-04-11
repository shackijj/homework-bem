const express = require('express');
const device = require('device');

const app = express();

app.get('/detect', (req, res) => {
    const userAgent = req.header('user-agent');
    const { type } = device(userAgent);
    res.cookie('device', type, { maxAge: 900000 });
    
    const referrer = req.header('referer');
    res.redirect(referrer);
});

app.listen(3000);