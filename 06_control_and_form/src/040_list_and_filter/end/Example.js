import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];
// POINT filterメソッドの使い方
const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)} />
      <ul>
        {animals
          // return値がtrueなら表示を許可し(許可された要素が入った配列が返ってくる)、
          // falseなら弾く(許可されていない要素が入っていない配列が返ってくる)
            // 初期値は""だが、(例: "Dog")の先頭に来ているとみなされ、0が返ってくる。
          .filter(animal => {
            // -1だと、animal内に、filterValと一致するものがなかったとみなされる
            // -1以外だと、一致するものがあったとみなされる
              // 引数に与えられた内容と同じ内容を持つ最初の要素のindexを返す
                // ここでは、String.indexOf()が使われているので、部分一致のように感じる。
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal))
            return isMatch
          })
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
