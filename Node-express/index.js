const express = require('express');
const http =  require('http');

const morgan = require('morgan');
const bodyParser=require('body-parser');

const dishRouter = require('./routes/dishRouter')

const hostname = 'localhost';
const port =  3030;

// important line
const app = express();  

app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/dishes/',dishRouter);

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log('Server running at http://'+hostname+":"+port);
});