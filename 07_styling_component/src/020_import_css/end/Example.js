import { useState } from "react";

import SubButton from "./components/SubButton";
import "./Example.css";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      {/* POINT 動的なスタイルの適用 */}
      {/* POINT クラスの付け外しに論理積 (&&) は使用してはいけません。
        例）className={`btn ${isSelected && 'selected'}`}
          isSelected が false の場合、className='btn false' になってしまう為。
      */}
      <button
        // ``(テンプレートリテラル)の中でjsコードを使いたい場合は、${}で囲む。
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <SubButton />
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
