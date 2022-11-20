import React, { useEffect, useState } from "react";
import TaskAddInput from "./input/TaskAddInput";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";

export const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  // useEffect(() => {
  //   console.log("-------------");
  //   console.log(inputText);
  //   console.log(...taskList);
  // }, [taskList]);

  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskAddInput
        inputText={inputText}
        taskList={taskList}
        setInputText={setInputText}
        setTaskList={setTaskList}
      />
      <TaskCardDeleteButton />
      <Tasks taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};
export default TaskCard;
