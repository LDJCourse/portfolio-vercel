import React, { useState } from "react";

const Todo = ({ todo, taskID, removeTodo, updateTodo }) => {
  const [isDone, setIsDone] = useState(false);
  const [editTodo, setEditTodo] = useState(todo);
  const [isEditing, setIsEditing] = useState(false);

  const handleIsDone = () => {
    setIsDone(!isDone);
  };

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleRemove = () => {
    removeTodo(taskID);
  };

  const handleChange = (e) => {
    setEditTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    updateTodo(taskID, editTodo);
  };

  const doneTodo = `line-through text-opacity-80 text-neutral-900 `;

  if (isEditing) {
    return (
      <div className="flex justify-between items-center text-red-400 border-b border-red-400 ">
        <form className="w-full flex justify-between" onSubmit={handleSubmit}>
          <input
            className="w-full p-2  focus:outline-none bg-inherit"
            value={editTodo}
            onChange={handleChange}
          />
          <button className="py-2 px-4 font-bold text-base border-l border-r border-red-400 ">
            Edit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="border-b border-red-400 p-2 flex justify-between items-center hover:bg-red-400 hover:bg-opacity-10">
      <h1
        className={`${
          isDone ? doneTodo : ""
        } text-xs md:text-base  text-center font-semibold text-red-400 `}
      >
        {todo}
      </h1>
      <TodoActions
        taskID={taskID}
        isDone={isDone}
        handleIsDone={handleIsDone}
        handleRemove={handleRemove}
        handleEditing={handleEditing}
      />
    </div>
  );
};

export const TodoActions = ({
  isDone,
  handleIsDone,
  handleRemove,
  handleEditing,
  taskID,
}) => {
  return (
    <div className="px-2 w-20 flex justify-between text-white">
      <button onClick={handleEditing}>
        <span className="material-symbols-rounded ">edit</span>
      </button>
      <button onClick={handleRemove}>
        <span className="material-symbols-rounded">delete</span>
      </button>
    </div>
  );
};

export default Todo;
