const Task  = require('../models/todo');
const User = require('../models/user');
module.exports.create = async function(req,res){


    console.log('inside to do task Controller');

    try {
     
      
            task = await Task.create(req.body); 
            return res.json(201, {
                message: 'Task created successfully!'
            })
        
    } catch(err){
        //catching errors
        console.log('Internal server error!!',err);
        return res.json(500, {
            message: 'Internal Server Error'
        })
    }



}


module.exports.update = async function(req,res){

    console.log('inside to do task Controller');
   
try{
    const id = req.params.id;

    const updates = req.body;

    const result  = await Task.findByIdAndUpdate(id,updates);

    return res.json(201, {
        message: 'Task updated successfully!',
        data:  {
            result
        }
    })


}
catch(err){

    console.log('Internal server error!!',err);
    return res.json(500, {
        message: 'Internal Server Error'
    })

}


}



module.exports.alltodo = async function(req,res){

    try {
       const result = await Task.find();

        const page = req.query.page
        const limit = req.query.limit


        const startIndex = (page -1 )* limit;
        const endIndex = page*limit

        const resulttask = result.slice(startIndex,endIndex);
      
        const fromdate =req.query.fromdate
        const resultgreaterthan =await Task.find({date :{$gte :fromdate}})
        

       res.send(resulttask);
       res.send(resultgreaterthan);
       
      } catch (err) {
        console.log(`Error creating all tasks : ${err}`);
        return res.status(500).json({
          message: "Internal Server Error",
        });
      }

}


module.exports.delete = async function(req,res){

   


    try{
        const id = req.params.id;
    
    
        const result  = await Task.findByIdAndDelete(id);
    
        return res.json(201, {
            message: 'Task Deleted successfully!',
           
        })
    
    
    }
    catch(err){
    
        console.log('Internal server error!!',err);
        return res.json(500, {
            message: 'Internal Server Error'
        })
    
    }
    

}