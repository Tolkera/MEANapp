const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

module.exports = function(app, config){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.set('port', config.port);
    app.use(express.static(config.rootPath + '/dist/'))
}