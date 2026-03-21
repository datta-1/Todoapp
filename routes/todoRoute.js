const express=require('express')
const authMiddleware = require('../middlewares/authMiddleware');
const {getTodo}=require('../controllers/todoController')
const {deleteTodo}=require('../controllers/todoController')

const {todocontrol}=require('../controllers/todoController')
const router=express.Router()
//create todo
router.post('/create',authMiddleware,todocontrol)
//get todo
router.post('/getAll/:userId',authMiddleware,getTodo)
//delete todo
router.post('/delete/:id',authMiddleware,deleteTodo)
module.exports = router;