import React from "react";
import AddTaskCardsButton from "./AddTaskCardsButton";
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
