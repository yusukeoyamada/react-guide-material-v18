/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
  例) 1
  例) ""
  例) 1 === 1
    上記は、jsx({})内で、使用できる
文：変数宣言、for文、if文、switch文、セミコロンで区切るもの。
  例) const a = 1;
  例) const b = (const c = 1);
  例) 1;
    上記は、jsx({})内で、使用できない。
  ただし
    「true? "hello" : "bye"」のような三項演算子 (式とみなされる)
      上記は、jsx({})内で、使用できる
*/

import "./Child.css";

const Child = () => {
  return (
    <div className="component">
      <h3>式と文</h3>
    </div>
  );
};

export default Child;
