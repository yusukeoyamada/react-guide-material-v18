import { useDispatch } from "react-redux";

// 以下で、使用するActionCreaterを呼び出している。
import { add, minus } from "../store/modules/counter"

const CounterButton = ({calcType, step}) => {

	const dispatch = useDispatch();
	
	const clickHandler = () => {
    // ここでいうstepは、payloadを指す。
    const action = calcType === '+' ? add(step) : minus(step);
    console.log(action)

    dispatch(action);
	}

	return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;