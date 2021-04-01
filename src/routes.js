const express = require('express');
const routes = express.Router();

const basePath = __dirname + "/views";
//request, response
routes.get('/', (request, response) => response.sendFile(basePath + "/views/index.html"));
//routes
routes.get('/job', (req, res) => {
    return res.redirect('/');
});

module.exports = routes;