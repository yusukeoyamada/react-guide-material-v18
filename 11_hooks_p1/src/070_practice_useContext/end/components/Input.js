import { useDispatchCalc, useCalc } from "../context/CalcContext";

const Input = ({ name }) => {
  const state = useCalc();
  const dispatch = useDispatchCalc();

  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <div>
      {name}:
      <input
        type="number"
        name={name}
        // 以下、ブラケット記法と呼ばれる
          // nameには「"a"」などが渡されるので、これをキーとしてプロパティが選出される
        value={state[name]}
        onChange={numChangeHandler}
      />
    </div>
  );
};

export default Input;
