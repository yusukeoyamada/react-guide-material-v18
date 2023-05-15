/* POINT JSX には JavaScript 式を記述できる
JSX 内の 波括弧 {...} で囲んだ部分は JavaScript 式として実行時に評価されます。
 */
import "./Expression.css";

const Expression = () => {
  
  const title = "Expression";
  const arry = ["item1", "item2", "item3"];
  // テンプレートリテラル: ${arg}とすることで、文字列の中に引数を埋め込める
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>Hello JSX</h3>;
  const bool = true;
  
  console.log(jsx);

  return (
    // POINT 波括弧は属性値にも使用できます。
      // toLowerCase(): 全てを小文字に変換
    <div className={title.toLowerCase()}>
      {/* POINT 波括弧内は実行時に評価されます。 */}
        {/* 波括弧内に記載できるのは、文ではなく式 */}
      <h3>{"Hello " + title}</h3>
      {/* POINT 配列を子要素に指定すると配列の要素が値の列として(結合されて)展開されます。 */}
      <h3>{arry}</h3>
      {/* POINT 関数を呼び出して return した値を埋め込むこともできます。 */}
      <h3>{hello("Hello")}</h3>
      {/* POINT 波括弧内に JSX を記述することもできます。*/}
      {<h3>Hello JSX</h3>}
      {/* POINT 変数に代入したJSXも埋め込めます。 */}
      {jsx}
      {/* POINT 変数に代入したbooleanは、表示されない */}
      {bool}
    </div>
  );
};

export default Expression;
