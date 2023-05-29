import { createContext, useContext, useEffect, useReducer } from "react";
import todoApi from "../api/todo";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todosList = [
  {
    id: 1,
    content: "店予約する",
    editing: false,
  },
  {
    id: 2,
    content: "卵買う",
    editing: false,
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false,
  },
];

const todoReducer = (todos, action) => {
  switch (action.type) {
    // 以下を追加して、初期化する。
    case "todo/init":
      return [...action.todos];

    case "todo/add":
      return [...todos, action.todo];

    case "todo/delete":
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });

    case "todo/update":
      return todos.map((_todo) => {
        return _todo.id === action.todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });

    default:
      return todos;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  // 以下を追加して、サーバーとの通信を行っている。
  useEffect(() => {
    // 以下につき、awaitを使用する場合は、以下のように記載する。
      // const todos = await todoApi.getAll();
      // dispatch({ type: 'todo/init', todos });
        // todosは、{ todos: todos }と同様。
    todoApi.getAll().then(todos => {
      dispatch({ type: 'todo/init', todos })
    })
  }, [])

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodos = () => useContext(TodoContext);
const useDispatchTodos = () => useContext(TodoDispatchContext);

export { useTodos, useDispatchTodos, TodoProvider };
