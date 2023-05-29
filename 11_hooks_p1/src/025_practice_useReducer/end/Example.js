// POINT useReducerの練習問題
import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

// payload(付加情報): name, value
  // reduxの書き方に準拠
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      // [name]: コンピューテッドプロパティ名（Computed Property Names）と呼ばれる構文。
      // 動的にオブジェクトを変更する際に便利な構文
        // nameの値に基づいて新しいプロパティを追加することが
          // 例: nameが"a"なら、既存の「a」プロパティの値が更新される。
          // 例: nameが"c"なら、新規の「c」プロパティが追加される。
        // []を取ると、nameプロパティになるだけ、nameの中身をキーにしたい場合に使える。
      return { ...state, [name]: value };
    }
    case "add": {
      return { ...state, result: parseInt(state.a) + parseInt(state.b) };
    }
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    // ここでいう「e.target.value」は、optionのvalue。
    dispatch({type: e.target.value});
  };
  const numChangeHandler = (e) => {
    dispatch({type: 'change', payload: {name: e.target.name, value: e.target.value}});
  };
  return (
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      {/* 「value={state.type}」は使用されていない。 */}
      <select value={state.type} name="type" onChange={calculate}>
        {CALC_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <h3>結果：{state.result}</h3>
    </>
  );
};

export default Example;
