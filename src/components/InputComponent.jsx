import React, { useState } from "react";

const InputComponent = ({ addTask }) => {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };
  return (
    <form className="search">
      <input
        type="text"
        placeholder="Enter the task..."
        id="tinput"
        autoComplete="off"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={onSubmit} className="add-btn">
        Add to list
      </button>
    </form>
  );
};

export default InputComponent;
