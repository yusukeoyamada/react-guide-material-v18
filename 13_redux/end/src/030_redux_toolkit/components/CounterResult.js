import { useSelector } from "react-redux"
const CounterResult = () => {
  const state = useSelector(state => state);

  // state(グローバスステート)の中の、
  // configureStoreで設定した「counter」の中に、stateが設定されている。
  return <h3>{state.counter}</h3>;
};

export default CounterResult;