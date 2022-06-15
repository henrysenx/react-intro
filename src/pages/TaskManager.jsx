import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import TaskList from "../components/TaskList";

const TaskManager = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    let temp = [...taskList];
    temp.push(task);
    setTaskList(temp);
  };

  const deleteTask = (task) => {
    let temp = taskList.filter((taskItem) => taskItem !== task);
    setTaskList(temp);
  };
  return (
    <div className="main">
      <h1 className="heading">Todo App</h1>

      <div className="container_wrap">
        <InputComponent addTask={addTask} />
        <TaskList taskList={taskList} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default TaskManager;
