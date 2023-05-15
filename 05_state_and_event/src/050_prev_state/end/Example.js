import { useState } from "react";

/* 
POINT stateの更新は予約される（すぐには更新されない。非同期で処理される）
  直ぐにconsole.log()で確認しても、反映されていない。
  再レンダリング時に反映されることに。
POINT 更新予定のstateの値の取得方法
*/
const Example = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
    // 下記countには更新された値が入っていない。
    // setCount(count + 1);

    // 更新された値を即時に更新したい場合には、以下のように記載する。
    setCount(prevstate /* 現在のstateの値 */ => {
      return prevstate + 1; /* 次のstateの値 */
    } );
    console.log(count);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button
        onClick={countUp}
      >+</button>
      <button
        onClick={countDown}
      >-</button>
    </>
  );
};

export default Example;
