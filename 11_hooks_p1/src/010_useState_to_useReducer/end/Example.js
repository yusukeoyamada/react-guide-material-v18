import { useReducer, useState } from "react";
/* POINT useReducerの使い方
  const [state, dispatch] = useReducer(reducer(コールバック関数), initialArg, init)
  reducer(state, action(オブジェクトの形にしてもよい: { type, step }))
    上記reducerは、dispatchを使って、実行できる。
*/

// POINT useReducerはuseStateの書き換えに使用
const Example = () => {
  const [state, setState] = useState(0);
  // useReducerの第1引数のコールバック関数の第1引数: 前回のstate
  // useReducerの第1引数のコールバック関数の第2引数: dispatch()の引数
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    // useReducerは使うときではなく、定義するときに、stateの変更をどうするかを定義する。
    switch (type) {
      case "+":
        return prev + step; 
      case "-":
        return prev - step;
      default:
        throw new Error('不明なactionです。')
    }

    // 以下、useReducerの第1引数のコールバック関数の第2引数: actionの場合
      // if (action === "+") {
      //   return ++prev;
      // } else if (action === "-") {
      //   return --prev;
      // }
  }, 0);

  const countUp = () => {
    // useStateは使うときに、stateの変更をどうするかを定義する。
    setState((prev) => ++prev);
  };
  const rcountUp = () => {
    // dispatch関数を実行すると、useReducerの第1引数に渡された関数が実行される。
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
