import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Layouts/Navbar'
import PopModel from '../../components/Layouts/PopModel'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleAddTask = () => {
    // Logic to add task (e.g., API call)
    setShowModal(true); // Close modal after adding task
  }
  return (
    <>
    <Navbar />
    <div className='container'>
      <h1>Welcome to the Todo List App</h1>
      <p>Manage your tasks efficiently and stay organized with our user-friendly interface.</p>
      <div className='add-task'>
        <h2>Add a New Task</h2>

        <input type="search" placeholder= "Enter your task here" />
        <button className='btn btn-primary' onClick={handleAddTask}>Add Task<i className="fa-solid fa-plus"></i></button>
      </div>
      <h1>{title} and {description}</h1>
      {/* model */}
      <PopModel 
      showModal={showModal}
      setShowModal={setShowModal}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      />
    </div>
      
    </>
  )
}

export default Home
