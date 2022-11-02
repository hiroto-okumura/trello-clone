import React from "react";
import TaskAddInput from "./TaskAddInput";
import TaskCardDeleteButton from "./TaskCardDeleteButton";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";

export const TaskCard = () => {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskAddInput />
      <TaskCardDeleteButton />
      <Tasks />
    </div>
  );
};
export default TaskCard;
