import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export const Task = ({ task, taskList, setTaskList, index }) => {
  const removeTask = (id) => {
    // filter（クリックしたtaskのidとtask.idが一致したらfalseになるから、filterだとfalse→削除)
    setTaskList(taskList.filter((task) => task.id !== id));
    // console.log(draggableId)
  };

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button className="btnTaskDelete" onClick={() => removeTask(task.id)}>
            <i className="fa-solid fa-circle-minus fa-lg"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
