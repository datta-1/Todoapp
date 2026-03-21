const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn=await mongoose.connect(
'mongodb+srv://chundurunarasimhadatta_db_user:Datta123@cluster0.iiw3h2z.mongodb.net/todolist?retryWrites=true&w=majority'
);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        }
    }
module.exports = connectDB;
        