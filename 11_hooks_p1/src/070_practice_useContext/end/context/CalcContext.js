import { createContext, useReducer, useContext } from "react";

export const CalcContext = createContext();
export const CalcDispatchContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      // 「+」演算子は、数値計算だけでなく、文字列同士の連結もできてしまう。
      return { ...state, result: parseInt(state.a) + parseInt(state.b) };
    }
    // 以下、「+」演算子以外の演算子は、数値計算として認識される。
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};

export const CalcProvider = ({ children }) => {
  // 以下は、providerの外で定義した方が、viewコンポーネントが表示される度に再生成されなくなる。
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CalcContext.Provider value={state}>
      <CalcDispatchContext.Provider value={dispatch}>
        {children}
      </CalcDispatchContext.Provider>
    </CalcContext.Provider>
  );
};

export const useCalc = () => useContext(CalcContext);
export const useDispatchCalc = () => useContext(CalcDispatchContext);
