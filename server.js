const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
const mongoURI = 'mongodb://localhost:27017/todolist';
const mongocloudURI ='mongodb+srv://chundurunarasimhadatta_db_user:Datta123@cluster0.iiw3h2z.mongodb.net/todolist';


connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/user', require('./routes/userRoute'));
app.use('/api/v1/todo', require('./routes/todoRoute'));
app.use('/api/v1/test', require('./routes/testRoute'));

app.listen(5200, () => {
    console.log('Server is running on port 5200');
});