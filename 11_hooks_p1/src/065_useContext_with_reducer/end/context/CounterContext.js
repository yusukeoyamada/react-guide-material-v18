import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();
const CounterDispatchContext = createContext();

// stateだけ使うproviderと、dispatch関数だけ使うproviderに分けた
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error('不明なactionです。')
    }
  }, 0);

  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  )
}

const useCounter = () => {
  return useContext(CounterContext);
}

const useCounterDispatch = () => {
  return useContext(CounterDispatchContext);
}

// 以下のような形で、名前付きexportできるようにできる。
export { CounterProvider, useCounter, useCounterDispatch }