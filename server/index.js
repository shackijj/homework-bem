const express = require('express');
const device = require('device');
const path = require('path');

const app = express();
const PORT = 3000;

/**
 * It's a demo server. In production environment cookies should be used to
 * avoid detecting device on each request.
 */
app.use((req, res, next) => {
    const url = req.url;
    const userAgent = req.header('user-agent');
    const { type } = device(userAgent);
    req.url = `${type}${url}`;
    next('route');
});

app.use(express.static(path.join(__dirname, '../builds')))
app.listen(PORT, () => {
    console.log(`App listens on ${PORT}`);
});