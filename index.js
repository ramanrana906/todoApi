const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
const bodyParser = require("body-parser")



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use('/', require('./routes'));



app.listen(port,function(err){
    if(err){
        console.log('Error while running the Server');
    }
console.log(`Server is up and running on ${port}`);
})