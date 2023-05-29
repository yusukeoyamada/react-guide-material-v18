// POINT エラーメッセージから問題を解消
import { useState } from "react"

const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  // console.log('re-render');

  const countUp = () => {
    setCount((prevstate) => {
      const newState = { val: prevstate.val + 1 }
      // 以下では、再レンダリングされないので、そこで原因を探す。
      // 新しいオブジェクトを生成し、それを使って、stateを更新する必要あり。
        // prevstate.val += 1;
        // console.log(1);
      return newState;
    });
  };

  return (
    <>
      <p>現在のカウント数: {count.val}</p>
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example;
