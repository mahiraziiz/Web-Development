import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.Todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {todos.map((todo) => (
          <ul className="list-none">
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              <button
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <svg xmlns="https://www.w3.org/2000/svg" fill="none" />X
              </button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Todos;
