import { useContext } from "react";
import { MyContext } from "../Example";

const OtherChild = () => {
  // Providerのvalueに設定されたものか、初期値が呼び出される。
    // 配列の1番目の更新用関数だけ欲しい場合は、以下のように記載。
  const [, setState] = useContext(MyContext);

  const clickHandler = (e) => {
    setState((prev) => prev + 1);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default OtherChild;
