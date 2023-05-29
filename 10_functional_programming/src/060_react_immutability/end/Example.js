import { useState } from "react";

  // POINT ReactでのImmutability
  // 関数型（純粋関数）
  // ・fn(決まった引数) -> 決まった戻り値
  // ・関数外の状態（データ）は参照・変更しない。
  // ・関数外に影響を及ぼさない。
  // ・引数で渡された値を変更しない。（★Immutability）
const Child = ({ state, setState }) => {
  // 以下のように、直接変更するのではなく、setStateなどの関数を経由する。
    // props.state = { value: 1 }
  // 以下を以下の場所ですると、無限ループに陥るのでイベント発火時に実行する必要あり。
    // setState({ value: 1 })

  const increment = () => {
    setState(prev => {
      // 以下のように、ミュータブルな値の操作には、
      // 新たなオブジェクトを生成するなど、不変性の保持を考慮する。
      const newState = { value: prev.value + 1 }
      // prev.value += 1;
      return newState;
    })
  }
  return (
    <>
      <span>{state.value}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state} setState={setState} />
      </div>
    </>
  );
};

export default Example;
