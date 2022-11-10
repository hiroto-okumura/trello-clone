// import React, { useEffect } from "react";

export const TaskAddInput = ({
  inputText,
  taskList,
  setInputText,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // エンターでタスク追加する時、→setTaskListでtaskListに追加更新
    setTaskList([...taskList, { id: taskList.length, text: inputText }]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  // useEffect(() => {
  //   console.log("-------------");
  //   console.log(inputText);
  //   console.log(...taskList);
  // }, [inputText, taskList]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          onChange={handleChange}
          type="text"
          placeholder="add your task"
          className="taskAddInput"
        ></input>
      </form>
    </div>
  );
};
export default TaskAddInput;
