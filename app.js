const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

app.use(express.static(path.join(__dirname + '/dist')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log("Running"));
// app.listen(process.env.PORT || 8080);

console.log('Console listening!');