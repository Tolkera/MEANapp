const fs = require('fs');
const path = require('path');
const users = require('../controllers/users');
const auth = require('./auth');
const pluckData = require('../utilities/pluck-data').user;

module.exports = function(app, dir) {

    app.post('/api/users', users.createUser );
    app.put('/api/users', users.updateUser );
    app.get('/logout', function(req, res){
        req.logout();
        res.send({success: true});
    });

    app.post('/api/login', auth.authenticate);

    app.get('*', (req, res) => {
        var userData = null;
        if (req.user) {
            userData = JSON.stringify(pluckData(req.user))
        }
        let fileContents;

        fs.readFile(path.join(dir, 'dist/main.html'), 'utf-8', (err, file)=>{
            if (err) throw err;
            fileContents = file.replace("UserData", userData);
            res.send(fileContents);
        });
    });
};