import { createContext, useContext, useReducer } from "react";

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

// action変数に関して
// dispatch関数の引数としてオブジェクトを定義しているので、
// actionとすることで、ここで、プロパティを指定せずに済む。
  // ただ、ここで、プロパティを指定した方(actionの代わりに、「{ type, todo }」)が、どういうプロパティがactionにあるのか分かりやすいとは思う。
    // ただ、大規模になってくると、ここも変更しないといけなくなるので、変更箇所を増やさない為に、このままでも良い気がする。
const todoReducer = (todos, action) => {
  switch (action.type) {
    case "todo/add":
      return [...todos, action.todo];
    // 元はidが渡されてきていたが、統一性を持たせる為に、todoが渡されるようにした。
    case "todo/delete":
      // 以下、todoは、_todoとした方がわかりやすい。
      return todos.filter((todo) => {
        return todo.id !== action.todo.id;
      });
    case "todo/update":
      return todos.map((_todo) => {
        // 以下で、更新された「action.todo」を、元のtodoに反映している。
        return _todo.id === action.todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });
    default:
      return todos;
  }
};

const TodoProvider = ({ children }) => {
  // todosListをこの中で定義した場合、viewコンポーネントが表示される度に再生成される。
    // なので、外で定義している。
  const [todos, dispatch] = useReducer(todoReducer, todosList);

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
