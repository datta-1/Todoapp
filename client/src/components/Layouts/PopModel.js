import React from 'react';
import toast from 'react-hot-toast';
import TodoService from '../../services/TodoService';

const PopModel = ({title,setTitle,description,setDescription,showModal,setShowModal,getUserTask}) => {
    const handleClose = () => {
        setShowModal(false);
    }
const handleSave = async() => {
    try {
        const userData = JSON.parse(localStorage.getItem('todoapp'))
        const id = userData&&userData.user.id;
        const data= {title,description,user:id}
        if(!title || !description){
            alert('Please fill in all fields');
            return;
        }
        const todo= await TodoService.createTodo(data);
        toast.success('Task saved successfully',todo);
        setShowModal(false);
        setTitle('');
        setDescription('');
        getUserTask();
    }
    catch (error) {
        console.error('Error saving task:', error);
        toast.error('Error saving task');
    }
};
  return (
    <>
    {showModal &&(
    <div className="modal d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add new task</h5>
            <button type="button" className="btn-close" aria-label='close' onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Task Name</label>
              <input type="text" className="form-control" placeholder="Enter your task here" value={title} 
              onChange={(e)=>setTitle(e.target.value)}/>
            </div>

            <div className="form-floating">
              <textarea className="form-control" placeholder="Task Description" value={description} 
              onChange={(e)=>setDescription(e.target.value)}></textarea>
              <label>Task Description</label>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={handleClose}>Close</button>
            <button className="btn btn-primary" onClick={handleSave}>Save Task</button>
          </div>

        </div>
      </div>
    </div>
    )}
    </>
  );
};
export default PopModel;