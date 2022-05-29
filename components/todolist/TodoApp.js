import { useState } from "react";

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd-next";

// Components
import Todo from "./Todo";
import TodoForm from "./TodoForm";

// Dummy data
const dumData = [
  {
    todo: "Buy groceries",
    id: 99998,
  },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(dumData);
  const [onOverflowShow, setOnOverflowShow] = useState(false);

  const handleOnOverflowShow = () => {
    if (onOverflowShow === false) {
      setOnOverflowShow(true);
    }
  };

  // Add todo
  // If todo = empty, do nothing and return
  const handleCreateTodo = (todo, id) => {
    if (todo !== "") {
      setTodos([...todos, { todo, id }]);
    }
    return;
  };

  // Delete todo
  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Update todo
  const handleUpdateTodo = (id, updatedTask) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, todo: updatedTask };
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  const todoAppWidth = "w-80 md:w-96";

  return (
    <div
      className={` ${todoAppWidth}  my-4 flex flex-col justify-between rounded bg-neutral-900  `}
    >
      <h1 className="py-3 w-full text-center text-2xl text-red-400 tracking-wider ">
        To do list
      </h1>

      <div className="flex justify-center">
        <TodoForm
          handleOnOverflowShow={handleOnOverflowShow}
          createTodo={handleCreateTodo}
        />
      </div>
      <div className=" ">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="todoslist">
            {(provided) => (
              <div
                className="todoslist scrollbar overflow-y-scroll h-52"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todos.map(({ id, todo }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className=""
                        >
                          <Todo
                            key={id}
                            taskID={id}
                            todo={todo}
                            removeTodo={handleRemoveTodo}
                            updateTodo={handleUpdateTodo}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TodoApp;
