import { useDispatch } from "react-redux";

const CounterButton = ({calcType, step, actionCreator}) => {
  
  const dispatch = useDispatch();
  const clickHandler = () => {
    // 以下は以前の処理
      // const action = calcType === '+' ? add(step) : minus(step);
    // actionCreatorとして渡ってくるのは、addや、minusといったActionCreaterだけでなく
    // redux-thunk関数などのmiddlewareも
      // 現状だと、calcTypeは識別の為には使用していない。
    dispatch(actionCreator(step));
  }

  return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;