import { useState } from "react";

// POINT input要素、textarea要素の使い方
const Example = () => {

  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  
  return (
    <div>
      {/* labelのhtmlFor(jsx内だけ(forは他でもよく使うから)。htmlではfor。for)の値と、inputのidが一致していると、紐づけられる。 */}
        {/* 紐づいたinputにフォーカスを充てる為にも使える */}
      <label htmlFor="456">ラベル</label>
      <div>
        <input
          id="123"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <textarea
          id="456"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
    </div>
  );
};

export default Example;
