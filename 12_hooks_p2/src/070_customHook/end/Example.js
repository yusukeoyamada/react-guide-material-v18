import { useState } from "react";
import useTimer from "./useTimer";

// POINT カスタムフックを利用した実装
const Example = () => {
  const [ isDisp, setIsDisp ] = useState(true);

  return (
    <>
      {isDisp && <Timer/>}
      <button onClick={() => setIsDisp(prev => !prev)}>{isDisp ? '非表示' : '表示'}</button>
    </>
  )
}

const Timer = () => {
  // 以下のように、「use〇〇」と呼ばれる独自で作成した関数のことを、Custom Hookと呼ばれる。
    // 端的にいうと、useStateや、useEffectを内部で呼んでいる関数のこと。
      // 基本的に、useStateや、useEffectは、関数コンポーネントのトップレベル(returnより上)でしか呼べない。
      // ただ、例外的に、Custom Hookの中では呼べる。
  const { time, isRunning, toggle, reset } = useTimer();

  return (
    <>
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    <div>
      <button onClick={toggle}>{isRunning ? '一時停止' : 'スタート'}</button>
      <button onClick={reset}>リセット</button>
    </div>
    </>
    );
};

export default Example;
