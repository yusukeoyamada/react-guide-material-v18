import { useState } from "react";

// POINT 配列のstateの扱い方
const Example = () => {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);

  const shuffle = () => {
    // オブジェクトと同様に、新しい配列を生成して、更新する必要あり。
    const newNums = [ ...nums ];
    const lastVal = newNums.pop(); // 配列の末尾が1つ削除される。変数への代入をすると、削除したものが入る。
    newNums.unshift(lastVal); // 削除した末尾を先頭に入れる。
    setNums(newNums);
  }
  return (
    <>
      {/* 配列の場合、中身が展開・結合されて表示される */}
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
