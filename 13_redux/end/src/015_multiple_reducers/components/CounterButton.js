import { useDispatch } from "react-redux";

const CounterButton = ({calcType, step}) => {
  
  const dispatch = useDispatch();
  // const dispatch = useCounterDispatch();
  
  const clickHandler = () => {
    // 以下のように、calcTypeの前に、識別文字列を追加することで、どのstateを変更するかを指定できるように。
    dispatch({ type: 'counter2/' + calcType, step });
  }

  return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;