var path = require('path');
var rootPath = path.normalize(__dirname + "/../..");

module.exports = {
    dev: {
        rootPath: rootPath,
        db: 'mongodb://localhost/ang',
        port: process.env.PORT || 3000
    },
    prod: {
        rootPath: rootPath,
        db: '',
        port: process.env.PORT || 80
    }
};