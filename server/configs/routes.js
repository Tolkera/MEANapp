const fs = require('fs');
const path = require('path');

module.exports = function(app, dir) {

    app.get('/api', (req, res) => {
        res.send('api route');
    });

    app.get('*', (req, res) => {

        let data = 'user test data insertion';
        let fileContents;
        fs.readFile(path.join(dir, 'dist/main.html'), 'utf-8', (err, file)=>{
            if (err) throw err;
            fileContents = file.replace("UserData", data);
            res.send(fileContents);
        });
    });
};