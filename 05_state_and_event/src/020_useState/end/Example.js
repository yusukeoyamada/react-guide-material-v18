import { useState } from "react";

const Example = () => {
  // POINT useStateは[ 値、変更用の関数 ]を返す
    // useState()の()には、初期値を入れる。
  // let valArry = useState();

  // POINT 分割代入で取得
    // 配列の先頭から順に変数に代入する。useState()の返り値は、配列の為。
  let [val, setVal] = useState();

  return (
    <>
      <input
        type="text"
        /* POINT 入力状態をstateで管理する標準的な書き方 */
        onChange={(e) => {
          // const setFn = valArry[1];
          setVal(e.target.value);
        }}
      />
      = {val}
    </>
  );
};

export default Example;
