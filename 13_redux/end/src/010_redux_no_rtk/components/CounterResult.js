// import { useCounter } from "../context/CounterContext";
import { useSelector } from "react-redux"

const CounterResult = () => {
  // 以下のように、stateをそのまま使用する場合には、useSelectorを使用する。
    // 引数にコールバック関数を使用
    // ここでコールバック関数の引数になっているstateは、グローバルのstateを表す。
      // ここでは、そのまま返すことに。
  // stateの値が更新されると、画面が再レンダリングされる。
  const state = useSelector(state => state);
  return <h3>{state}</h3>;
};

export default CounterResult;