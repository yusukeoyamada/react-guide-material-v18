import { useContext } from "react";
import { MyContext } from "../Example";

const GrandChild = () => {
  // useContextの引数として、別コンポーネントで定義した「MyContext」を指定する。
  const value = useContext(MyContext);

  return (
      <div style={{ border: "1px solid black" }}>
        <h3>孫コンポーネント</h3>
        {value}
      </div>
  );
};
export default GrandChild;
