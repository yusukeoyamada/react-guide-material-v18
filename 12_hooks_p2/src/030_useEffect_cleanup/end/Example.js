// POINT useEffectのクリーンアップ処理

import { useEffect, useState } from "react";
const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer/>}
      <button onClick={() => setIsDisp(prev => !prev)}>トグル</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);

  // 以下、依存配列(useEffectの第2引数)が空の場合。
  useEffect(() => {
    // 以下、return以外の部分を、副作用処理という。

    // console.log('init');

    let intervalId = null;
    intervalId = window.setInterval(() => {
      console.log('interval called');
      setTime(prev => prev + 1);
    }, 1000);

    // 以下return部分は、クリーンナップと呼ばれる。
    // 依存配列に空以外の値が設定された場合と、そうでない場合とで挙動が変化する。
      // 以下戻り値に関数を設定すると、Timerコンポーネントが削除された(アンマウントされた)場合に、
      // 戻り値に設定された関数が実行される。
    return () => {
      // Timerコンポーネントが削除された(アンマウントされた)場合でも
      // 上記setInterval処理を継続してしまう。
        // なので、以下後始末・初期化処理で、不必要に継続している処理を止める必要が。
      window.clearInterval(intervalId)
      // console.log('end');
    }
  }, [])
  
  // 以下、依存配列(useEffectの第2引数)が空でなく、設定されている場合。
  useEffect(() => {
    // console.log('updated');

    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time);

    // 以下return部分は、クリーンナップと呼ばれる。
      // 上記return以外の部分の何らかの後始末や、初期化処理などを行う部分
    // 実行の流れ
      // まず、return以外が実行される。
      // 次に、依存配列に設定されたstateが更新される度に、return -> return以外という流れで実行される。
      // 最後に、useEffectが記載されたコンポーネントが削除された(アンマウントされた)場合にも、return部分が実行される。
    return () => {
      // debugger
      // console.log('updated end');
    }
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
