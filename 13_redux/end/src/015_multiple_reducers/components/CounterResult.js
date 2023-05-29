import { useSelector } from "react-redux"
const CounterResult = () => {
  // const state = useCounter();

  // 以下のように記載すると、
  // 「state(グローバルステート)の中のcounterプロパティのみ使用する」という意味になるので、
  // 変数stateには、最終的に、counterのみが含まれる。
    // const state = useSelector(state => state.counter);
  const state = useSelector(state => state);
  console.log(state);

  // state(グローバルステート)の中には、
  // combineReducersに設定された、counterとcounter2のプロパティがあり、
  // そこに各々のstateが設定されている。
  return <h3>{state.counter}:{state.counter2}</h3>;
};

export default CounterResult;