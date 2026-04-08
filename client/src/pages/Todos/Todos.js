import React, { useState } from 'react'
import Navbar from '../../components/Layouts/Navbar'
import { useEffect } from 'react'
import TodoService from '../../services/TodoService'


const Todos = () => {

  const [FilteredTasks, setFilteredTasks] = useState([]);
  const [todostatus, settodostatus] = useState('');
  const [alltask, setAlltask] = useState([]);
  const [showModal, setShowModal] = useState(false);

  
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
  const incompleteTasks = alltask.filter(task => task.completed === false);
  const completedTasks = alltask.filter(task => task.completed === true);
  if (todostatus === 'completed') {
    setFilteredTasks(completedTasks);
  } else if (todostatus === 'incomplete') {
    setFilteredTasks(incompleteTasks);
  } else {
    setFilteredTasks(alltask);
  }
  getUserTask();
}, [todostatus, alltask]);

  return (
    <>
      <Navbar />

      <div className="filter-container">  
        <h4>Filter Tasks : {todostatus}</h4>

        <div className="filter-group">
          <select 
            className="form-select" 
            value={todostatus}
            onChange={(e) => settodostatus(e.target.value)}
          >
            <option value="">Filter by Status</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </div>
      <div className="card-container">
        {FilteredTasks?.length === 0 ? (<h1>No task Found</h1>) : (FilteredTasks?.map((task, i) => (
          <>
            <div
              className="card border-primary mb-3 mt-3"
              style={{ maxWidth: "18rem" }}
              key={i}
            >
              <div className="card-header">
                <div className="chead">
                  <h6>{task?.title.substring(0, 10)}</h6>
                  <h6
                    className={
                      task?.completed === true ? "task-cmp " : "task-inc"
                    }
                  >
                    {task?.completed === true ? "Completed " : "incomplete"}
                  </h6>
                </div>
              </div>
              <div className="card-body">
                <h6 style={{ fontWeight: "bold" }}>{task?.title}</h6>
                <p className="card-text">{task?.description}</p>
                <h6>Date : {task?.createdAt.substring(0, 10)}</h6>
              </div>
            </div>
          </>
        )))}
      </div>
    </>
  )
}

export default Todos