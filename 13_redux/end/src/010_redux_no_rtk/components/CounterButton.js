// import { useCounterDispatch } from "../context/CounterContext";
import { useDispatch } from "react-redux";

const CounterButton = ({calcType, step}) => {
  
  // const dispatch = useCounterDispatch();

  // stateの更新をする場合には、以下のように、reduxの名前付き関数、useDispatchを使用する。
    // dispatch関数の実行時の引数は、useReducerの時と同様に、reducerの第2引数に設定される。
  const dispatch = useDispatch();
  
  const clickHandler = () => {
    dispatch({ type: calcType, step });
  }

  return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;