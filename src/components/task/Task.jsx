import React from "react";

export const Task = ({ task }) => {
  return (
    <div className="taskBox">
      <p className="tasktext">{task.text}</p>
      <button className="btnTaskDelete">
        <i class="fa-solid fa-trash-arrow-up"></i>
      </button>
    </div>
  );
};

export default Task;
