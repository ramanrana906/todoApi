const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://ramanrana:raman@cluster0.uhmnuyo.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;