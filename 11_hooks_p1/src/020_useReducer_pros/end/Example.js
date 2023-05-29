import { useReducer, useState } from "react";

// POINT useReducerとuseStateの違い
  // useState: 状態の更新の仕方は利用側に託す。
  // useReducer: 状態の更新の仕方も状態側で担当する。
    // こちらの方が管理はしやすい

  // 以下、関数型プログラミングの視点
    // 状態と処理の分離
      // useState: コンポーネントで更新用の処理を保持
      // useReducer: stateと一緒に更新用の処理を保持
        // コンポーネントと切り離すことができる

    // 純粋性（純粋関数）: 純粋性がないと単体テストができない関数といえる。
      // useReducer: 特定の引数に特定の戻り値
        // 戻り値が引数に依存する

    // 不変性（Immutability）
      // stateがオブジェクトの場合は、新しいオブジェクトを生成して、元のオブジェクトを保護。
const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error('不明なactionです。')
    }
    // if (action === "+") {
    //   return ++prev;
    // } else if (action === "-") {
    //   return --prev;
    // }
  }, 0);

  const countUp = () => {
    setState((prev) => ++prev);
  };
  const countDown = () => {
    setState((prev) => --prev);
  };
  const rcountUp = () => {
    dispatch({ type: "+", step: 2 });
  };
  const rcountDown = () => {
    dispatch({ type: "-", step: 3 });
  };
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
