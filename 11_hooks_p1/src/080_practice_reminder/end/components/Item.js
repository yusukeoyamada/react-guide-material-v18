import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";

const Item = ({ todo }) => {
  // Itemコンポーネント内で使用するだけのstateなので、ここで管理。
  const [editingContent, setEditingContent] = useState(todo.content);

  const dispatch = useDispatchTodos();

  // 以下ローカル関数
  const changeContent = (e) => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    dispatch({ type: 'todo/update', todo: newTodo });
  };

  const confirmContent = (e) => {
    e.preventDefault();

    const newTodo = {
      ...todo,
      editing: !todo.editing,
      content: editingContent,
    };

    dispatch({ type: 'todo/update', todo: newTodo });
  };

  const complete = (todo) => {
    dispatch({ type: "todo/delete", todo });
  };

  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo)}>完了</button>
      {/* 「style={{ display: "inline" }}」は、改行させない為。 */}
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          // 以下は、ダブルクリック時に「toggleEditMode」が実行される。
            // 初期は、こっちが表示される。
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
