import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";
import todoApi from "../api/todo";

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = useDispatchTodos();

  const changeContent = (e) => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };

    // 以下を追加編集
      // editingプロパティだけ変更している。
    // なお、onDoubleClickイベントが発火したタイミングでtoggleEditMode内の処理が実行されることから、
    // 副作用に当たらないと言える為、useEffectで囲む必要はない。
    todoApi.patch(newTodo).then((newTodo) => {
      dispatch({ type: "todo/update", todo: newTodo });
    });
  };

  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      editing: !todo.editing,
      content: editingContent,
    };

    // 以下を追加編集
      // 引数に関して、「(newTodo) => {}」とせず、「() => {}」でも問題ない。
        // 上記の場合だと、同じ中身な為。
    // なお、onSubmitイベントが発火したタイミングでconfirmContent内の処理が実行されることから、
    // 副作用に当たらないと言える為、useEffectで囲む必要はない。
    todoApi.patch(newTodo).then((newTodo) => {
      dispatch({ type: "todo/update", todo: newTodo });
    });
  };

  // 以下を追加編集
  const complete = (todo) => {
    // ここでは、「.post(newTodo)」と異なり、変更対象のtodoが返ってこないので、
    // 「(todo) => {}」の「todo」を使用する。
    // なお、onClickイベントが発火したタイミングでcomplete内の処理が実行されることから、
    // 副作用に当たらないと言える為、useEffectで囲む必要はない。
    todoApi.delete(todo).then(() => {
      dispatch({ type: "todo/delete", todo });
    });
  };

  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
