import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";
import todoApi from "../api/todo";

const Form = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispatch = useDispatchTodos();

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      editing: false
    };

    // 以下を追加編集
      // newTodoに入ってくるものは、「.post(newTodo)」で引数に指定した「newTodo」
    // なお、onSubmitイベントが発火したタイミングでaddTodo内の処理が実行されることから、
    // 副作用に当たらないと言える為、useEffectで囲む必要はない。
    todoApi.post(newTodo).then(newTodo => {
      dispatch({ type: 'todo/add', todo: newTodo});
      setEnteredTodo("");
    })

  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
