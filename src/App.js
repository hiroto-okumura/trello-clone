import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './App.css';

function App() {
  // items[]の配列をDBと連携できれば、DBの内容を画面に出していじれそう
  const [items] = useState([
    { id: 0, text: "item0" },
    { id: 1, text: "item1" },
    { id: 2, text: "item2" }
  ]);

  const onDragEnd = (result) => {
    const remove = items.splice(result.source.index, 1)
    console.log(remove);
    items.splice(result.destination.index, 0, remove[0]);
  }



  return (
    <div className="dragDropArea">
      {/* 要素をつかんで離したときに、発火するonDragEnd関数 */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dp_1">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (

                <Draggable draggableId={item.text} index={item.id} key={item.id}>
                  {(provided) => (
                    <div className="item"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item.text}
                    </div>)}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
