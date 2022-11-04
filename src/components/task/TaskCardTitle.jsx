import React, { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputText, setInputText] = useState("Today");
  const handleClick = () => {
    setIsClick(true);
  };
  const handleChenge = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="inputTitleAreaWrapper">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="inputTitleArea"
            autoFocus
            maxLength={20}
            type="text"
            onChange={handleChenge}
            onBlur={handleBlur}
            value={inputText}
          ></input>
        </form>
      ) : (
        <h3>{inputText}</h3>
      )}
    </div>
  );
};
export default TaskCardTitle;
