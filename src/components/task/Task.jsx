import React from "react";

export const Task = ({ task, taskList, setTaskList }) => {
  const removeTask = (id) => {
    // filterめた便利（クリックしたtaskのidとtask.idが一致したらfalseになるから、filterだとfalse→削除
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="btnTaskDelete" onClick={() => removeTask(task.id)}>
        <i className="fa-solid fa-circle-minus fa-lg"></i>
      </button>
    </div>
  );
};

export default Task;
