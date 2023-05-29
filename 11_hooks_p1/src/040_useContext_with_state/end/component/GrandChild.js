import { useContext } from "react";
import { MyContext } from "../Example";
const GrandChild = () => {
  // 配列の0番目だけ取りたい場合は、以下のように分割代入を使う。
  const [value] = useContext(MyContext);
  
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>孫コンポーネント</h3>
      {value}
    </div>
  );
};
export default GrandChild;
