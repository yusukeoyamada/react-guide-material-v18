// redux(v4.2.0)では、以下は非推奨になっている。
  // redux-toolkitを使うことを推薦しているから。
import { createStore } from "redux";

const initialState = 0;
// 以下、useReducerと使い方が同じ。
  // 引数は、stateと、action
const reducer = (state = initialState, { type, step }) => {
  switch (type) {
    case "+":
      return state + step;
    case "-":
      return state - step;
    default:
      // reduxの場合は、そのまま返す。
      // redux-toolkitの場合は、defalutの部分はない。
      return state;
  }
};

// グローバルなステートを1つだけ保持する。
  // 引数にreducerを設定。
export default createStore(
  reducer
);