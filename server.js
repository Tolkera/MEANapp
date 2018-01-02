const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const fs = require('fs');

const routes = require('./server/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || '3000';
app.set('port', port);

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', routes);
app.get('*', (req, res) => {
    let data = 'user test data insertion';
    let fileContents;
    fs.readFile(path.join(__dirname, 'dist/main.html'), 'utf-8', (err, file)=>{
        if (err) throw err;
        fileContents = file.replace("UserData", data);
        res.send(fileContents);
    });
});

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));