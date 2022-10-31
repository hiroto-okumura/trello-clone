import React from "react";
import AddTaskCardsButton from "./AddTaskCardsButton";
import TaskCard from "./TaskCard";

export const TaskCards = () => {
  return (
    <div>
      <TaskCard />
      <AddTaskCardsButton />
    </div>
  );
};
