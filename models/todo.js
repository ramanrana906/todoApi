const mongoose = require('mongoose');
const todoSchema =  new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
   
},{
    timestamp:true
})

const Task  = mongoose.model('Task',todoSchema);

module.exports = Task;