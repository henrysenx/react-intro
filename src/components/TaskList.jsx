import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ taskList, deleteTask }) => {
  console.log(taskList);
  return (
    <div className="lists">
      {taskList.length ? (
        taskList.map((task, index) => (
          <TaskItem key={index} task={task} deleteTask={deleteTask} />
        ))
      ) : (
        <div className="message">
          Add Some Tasks{" "}
          <span role="img" aria-label="Party Popper">
            🎉
          </span>
        </div>
      )}
    </div>
  );
};

export default TaskList;
