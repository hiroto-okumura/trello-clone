import React from "react";
import Task from "./Task";

export const Tasks = ({ taskList, setTaskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div key={task.id}>
          <Task task={task} taskList={taskList} setTaskList={setTaskList} />
          {/* {console.log(task)}
          {console.log(task.id, task.text)} */}
        </div>
      ))}
    </div>
  );
};
export default Tasks;
//TODO warinig 出てるで
