import React from "react";

export const Task = ({ task }) => {
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="btnTaskDelete">
        <i class="fa-solid fa-circle-minus fa-lg"></i>
      </button>
    </div>
  );
};

export default Task;
