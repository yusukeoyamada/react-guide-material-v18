import { useSelector } from "react-redux"
const CounterResult = () => {
  // const state = useSelector(state => state);
  // console.log(state);

  // state(グローバスステート)の中の、
  // configureStoreで設定した「counter」の中に、stateが設定されている。
    // 最終的なローカルstateは、オブジェクトなので、そこも考慮する必要あり。
  const count = useSelector(state => state.counter.count);

  // return <h3>{state.counter.count}</h3>;
  return <h3>{count}</h3>;
};

export default CounterResult;