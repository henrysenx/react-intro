import React from "react";

const TaskItem = ({ task, deleteTask }) => {
  const removeTask = () => {
    deleteTask(task);
  };
  return (
    <div className="wrapper">
      <div className="fg"></div>
      <div className="task-box">
        <p className="task-txt">{task}</p>
        <button onClick={removeTask} className="del-btn">
          delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
