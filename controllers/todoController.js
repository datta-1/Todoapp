const Todo=require('../models/todomodel')
//CREATE TODO
const createTodo=async(req,res)=>{
    try {
        const {title,description,user}=req.body; 
        console.log("USER:", req.user);
        if(!title){
            return res.status(400).json({message:"Title is required"})
        }
        const newtodo=new Todo({
            title,
            description,
            user:req.user.userId
        })
        await newtodo.save();
        res.status(201).json({message:"Todo created successfully",newtodo})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error in creating todo"})
    }
}


// GET TODO
const getTodo=async(req,res)=>{
    try {
        const todos=await Todo.find({user:req.user.userId})
        res.status(200).json({message:"Todos fetched successfully",todos})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error in fetching todos"})
    }
}

//DELETE TODO
const deleteTodo=async(req,res)=>{
    try {
        const {id}=req.params;
        if(!id){
            return res.status(400).json({message:"No Todo is found with this id"})
        }
        const gettodo=await Todo.findByIdAndDelete({_id:id})
        if(!gettodo){
            return res.status(400).json({message:"No Todo Task Found"})
        }
        res.status(200).json({message:"Todo deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error in deleting todo"})
    }
}

//UPDATE TODO
const updateTodo=async(req,res)=>{
    try {
        const {id}=req.params;
        const {title,description,completed}=req.body;
        const updatedTodo=await Todo.findByIdAndUpdate(id,{title,description,completed},{new:true})
        res.status(200).json({message:"Todo updated successfully",updatedTodo})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error in updating todo"})
    }
}


module.exports={createTodo,getTodo,deleteTodo,updateTodo}                