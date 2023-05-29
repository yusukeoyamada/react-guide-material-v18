import { useEffect, useState, useLayoutEffect } from "react";

// POINT  useEffectの実行順を意識した実装。タイマー機能の拡張
const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer/>}
      <button onClick={() => setIsDisp(prev => !prev)}>{isDisp ? '非表示' : '表示'}</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // isRunningの値によって、実行されるかどうかが決まる。
  useEffect(() => {
    // console.log('init');
    let intervalId = null;

    if(isRunning) {
      // console.log('timer start');

      // 以下でインターバルの処理が登録される。
        // 以前の続きから開始する。
      intervalId = window.setInterval(() => {
        // console.log('interval running');
        setTime(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      // 以下で登録していたインターバルの処理が解除される。
      window.clearInterval(intervalId)
      // console.log('end');
    }
  }, [isRunning])
  
  useEffect(() => {
    // console.log('updated');
    
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time);

    return () => {
      // debugger
      // console.log('updated end');
    }
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key-end'));
    if(!isNaN(_time)) {
      setTime(_time);
    }
  }, [])

  const toggle = () => {
    setIsRunning(prev => !prev);
  }

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  }

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
