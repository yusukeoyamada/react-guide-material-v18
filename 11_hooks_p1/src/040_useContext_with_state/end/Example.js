// POINT useContextとstate
import { createContext, useState } from "react";
import Child from "./component/Child";
import OtherChild from "./component/OtherChild";

// もし、createContextの()に初期値を設定した場合
  // まず、useContext()の際に、Providerのvalueに設定されているものが呼ばれる。
  // 次に、それがない場合は、createContextの初期値に設定されたものが呼ばれる。
export const MyContext = createContext();

const Example = () => {
  // stateAndSetter = [ state, setState ]
  const stateAndSetter = useState(0);

  return (
    <MyContext.Provider value={stateAndSetter}>
      <Child />
      <OtherChild />
    </MyContext.Provider>
  );
};

export default Example;
