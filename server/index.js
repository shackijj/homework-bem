const express = require('express');
const device = require('device');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    const url = req.url;
    const userAgent = req.header('user-agent');
    const { type } = device(userAgent);
    req.url = `${type}${url}`;
    
    next('route');
});

app.use(express.static(path.join(__dirname, '../builds')))
app.listen(3000);