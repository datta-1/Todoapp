import React, { useState } from "react";
import EditTodo from "./Layouts/EditTodo";
import toast from "react-hot-toast";
import TodoService from "../services/TodoService";

const Card = ({ alltask, getUserTask }) => {
  const [showModal, setShowModal] = useState(false);

  //handle edit
  const handleEdit = () => {
    setShowModal(true);
  };
  console.log("ALL TASKS:", alltask);

  //hanlde delete
  const handleDelete = async (id) => {
    try { 
      await TodoService.deleteTodo(id);
      toast.success("task Deleted Succesfully");
      getUserTask();
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <>
      <div className="card-container">
        {alltask?.map((task, i) => (
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
              <div className="card-footer bg-transparent border-primary">
                <button
                  className="btn btn-warning"
                  title="EDIT Task"
                  onClick={handleEdit}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="btn btn-danger ms-2"
                  title="Delete Task"
                  onClick={() => handleDelete(task?._id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
            <div>
              {showModal && (
                <EditTodo
                  task={task}
                  setShowModal={setShowModal}
                  getUserTask={getUserTask}
                />
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Card;