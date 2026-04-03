const express=require('express')
const authMiddleware = require('../middlewares/authMiddleware');
const {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo
} = require('../controllers/todoController');


const {todocontrol}=require('../controllers/todoController')
const router=express.Router()
//create todo
router.post('/create',authMiddleware,createTodo)
//get todo
router.get('/getAll/:userId',authMiddleware,getTodo)
//delete todo
router.post('/delete/:id',authMiddleware,deleteTodo)
//update todo
router.patch('/update/:id',authMiddleware,updateTodo)
module.exports = router;