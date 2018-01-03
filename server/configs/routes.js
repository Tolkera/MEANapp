const fs = require('fs');
const path = require('path');

var users = require('../controllers/users');

module.exports = function(app, dir) {

    app.post('/api/users', users.createUser );

    app.get('*', (req, res) => {
        var userData = null;
        if (req.user) {
            userData = JSON.stringify({
                username: req.user.username,
                firstName: req.user.firstName,
                categories: req.user.categories,
                sprints: req.user.sprints
            })
        }
        let fileContents;

        fs.readFile(path.join(dir, 'dist/main.html'), 'utf-8', (err, file)=>{
            if (err) throw err;
            fileContents = file.replace("UserData", userData);
            res.send(fileContents);
        });
    });
};