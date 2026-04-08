import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Layouts/Navbar'
import PopModel from '../../components/Layouts/PopModel'
import { useEffect } from 'react'
import TodoService from '../../services/TodoService'
import Card from '../../components/Card'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [alltask, setAlltask] = useState([]);
  const [searchquery, setSearchquery] = useState('');



  const handleSearch = (e) => {
    const query = e.target.value;
    let filteredTasks = alltask.filter(task => task.title.toLowerCase().match(query.toLowerCase()));
    console.log("Filtered Tasks:", filteredTasks);
    setSearchquery(query);
    if (query && filteredTasks.length > 0) {
      setAlltask(filteredTasks && filteredTasks);
    } else {
      getUserTask();
    }
  }

  const handleAddTask = () => {
    // Logic to add task (e.g., API call)
    setShowModal(true); // Close modal after adding task
  }

  const getUserTask = async () => {
  try {
    const userData = JSON.parse(localStorage.getItem('todoapp'));
    const id = userData?.user?.id;

    const response = await TodoService.getTodos(id);

    console.log("API DATA:", response);

    setAlltask(response.data || response);
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};
useEffect(() => {
  getUserTask();
}, []);

  return (
    <>
    <Navbar />
    <div className='container'>
      <h1>Welcome to the Todo List App</h1>
      <p>Manage your tasks efficiently and stay organized with our user-friendly interface.</p>
      <div className='add-task'>
        <h2>Add a New Task</h2>

        <input type="search" placeholder= "Enter your task here" value={searchquery} onChange={handleSearch} />
        <button className='btn btn-primary' onClick={handleAddTask}>Add Task<i className="fa-solid fa-plus"></i></button>
      </div>
      <Card alltask={alltask} getUserTask={getUserTask} />
      <PopModel 
      showModal={showModal}
      setShowModal={setShowModal}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      getUserTask={getUserTask}
      />
    </div>
      
    </>
  )
}

export default Home
