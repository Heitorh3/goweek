const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
/*
mongoose.connect('mongodb://goweek:goweek123@ds251217.mlab.com:51217/goweek-heitor', {
    useNewUrlParser: true
});
*/
mongoose.connect('mongodb://localhost:17017/goweek',{
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3001, () => {
    console.log('Server iniciado na port 3001');
});