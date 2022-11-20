import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Task from "./Task";

export const Tasks = ({ taskList, setTaskList }) => {
  /*
    (3) [{…}, {…}, {…}]
    0: {id: 0, draggableId: 'task-0', text: 'a'}
    1: {id: 1, draggableId: 'task-1', text: 't'}
    2: {id: 2, draggableId: 'task-2', text: 'u'}
    length:3
    1,入れ替えた場合、
    2,同じところに置いた場合
    3,範囲外に置いた場合
    4,listをまたぐ入れ替え場合は、resultのDrappableId情報から
    どのリストからどのリストへなのかで判定必要。まずgetList(DrappableId)みたな。
    2つのリストの配列を更新する。setリスト名(更新したリスト:配列)みたいな
  */
  // resultのDroppableIdでどのリストで、何のタスクがどこから(source)どこへ(destination)に移動した情報。
  const reArrange = (list, startIndex, endIndex) => {
    const resultList = Array.from(list); //配列コピー
    const removed = resultList.splice(startIndex, 1);
    resultList.splice(endIndex, 0, removed[0]);
    return resultList;
  };
  const handleDragEnd = (result) => {
    const { source, destination } = result;
    // console.log(source.index, destination.index);
    const updated = reArrange(taskList, source.index, destination.index);
    setTaskList(updated);
    console.log(taskList);
  };

  // react-beautiful-dndライブラリ
  // DragDropContextでTaskコンポーネントをDrag&Dropする機能実装

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="Droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {taskList.map((task, index) => (
              <div key={task.id}>
                <Task
                  index={index}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList}
                />
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default Tasks;
//TODO warinig 出てるで
