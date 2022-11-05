import React from "react";
import AddTaskCardsButton from "./button/AddTaskCardsButton";
import TaskCard from "./TaskCard";

export const TaskCards = () => {
  return (
    <div className="taskCardsWrapper">
      <TaskCard />
      <AddTaskCardsButton />
    </div>
  );
};
export default TaskCards;
