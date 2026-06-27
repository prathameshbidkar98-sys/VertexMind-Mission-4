const Task = require("../models/Task");




// GET TASKS

exports.getTasks = async(req,res)=>{


    try{


        const tasks =
        await Task.find({
            user:req.user.id
        });



        res.json(tasks);



    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// CREATE TASK

exports.createTask = async(req,res)=>{


    try{


        const task =
        await Task.create({

            title:req.body.title,

            description:req.body.description,

            user:req.user.id

        });



        res.status(201).json(task);



    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }


};




// UPDATE TASK


exports.updateTask = async(req,res)=>{


try{


const task =
await Task.findById(req.params.id);



if(!task){

return res.status(404).json({
message:"Task not found"
});

}



task.title =
req.body.title || task.title;


task.description =
req.body.description || task.description;


task.completed =
req.body.completed ?? task.completed;



const updated =
await task.save();



res.json(updated);



}
catch(error){

res.status(500).json({
message:error.message
});

}


};





// DELETE TASK


exports.deleteTask = async(req,res)=>{


try{


const task =
await Task.findById(req.params.id);



if(!task){

return res.status(404).json({
message:"Task not found"
});

}



await task.deleteOne();



res.json({
message:"Task deleted"
});



}
catch(error){

res.status(500).json({
message:error.message
});

}

};