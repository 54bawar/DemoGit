const express = require('express');
const http =  require('http');

const morgan = require('morgan');
const bodyParser=require('body-parser');

const dishRouter = require('./routes/dishRouter')
const promRouter = require('./routes/promotions')
const leadRouter = require('./routes/leaders')

const hostname = 'localhost';
const port =  3030;

// important line
const app = express();  

app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/dishes/',dishRouter);
app.use('/promotions/',promRouter);
app.use('/leaders/',leadRouter);

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log('Server running at http://'+hostname+":"+port);
});