import { v4 as uuidv4 } from "uuid";

// Hooks
import useInputChange from "../hooks/useInputChange";

const TodoForm = ({ createTodo }) => {
  const [todo, setNewTodo, resetTodo] = useInputChange("");

  // Submit todo
  const handleSubmit = (e) => {
    e.preventDefault();
    const todoId = uuidv4();

    createTodo(todo, todoId);
    // Reset state
    resetTodo();
  };

  return (
    <form className="w-full flex justify-around" onSubmit={handleSubmit}>
      <input
        className="w-full p-2  focus:outline-none border-b-2 border-red-400 text-red-400 placeholder:text-red-400 bg-inherit "
        placeholder="Add your task here:"
        value={todo}
        onChange={setNewTodo}
      />
      <button className="py-2 px-4 font-bold text-base text-red-400 border border-red-400 active:bg-opacity-10 active:bg-red-400 ">
        Add
      </button>
    </form>
  );
};
export default TodoForm;
