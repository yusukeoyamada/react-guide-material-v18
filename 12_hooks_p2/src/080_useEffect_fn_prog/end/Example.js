import { useState, useEffect, useLayoutEffect } from "react";

// useEffectの機能的な観点
  // コンポーネントマウント時、更新時のみ呼び出したい。

// 純粋関数の観点から、useEffect内に記載される処理
  // コンソールへのログ出力
  // DOM操作: 関数の外側に影響を及ぼす処理
  // サーバーとの通信
  // タイマー処理
  // ランダムな値の生成: 特定の入力から特定の出力を出すという純粋性を持っていない処理

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
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // console.log('init');
    let intervalId = null;

    if(isRunning) {
      // console.log('timer start');

      // 元々以下処理がuseEffect外に記載、又は第2引数を空の配列すら何も設定しない状態のuseEffectの内に記載した場合において、
      // 再レンダリングごとに、重複して、setIntervalが設定されることにより、
      // カウントが不適切な挙動を起こしてしまう問題があった。
      intervalId = window.setInterval(() => {
        // console.log('interval running');
        setTime(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      window.clearInterval(intervalId)
      // console.log('end');
    }
  }, [isRunning])
  
  useEffect(() => {
    // // console.log('updated');
    
    // 以下DOMの操作
      // SSR時、サーバーサイド側では「document」や「window」というオブジェクトは用意されていない。
      // なので、エラーとなってしまい、他の部分に影響が出る。
        // useEffect内の処理は、サーバーサイドでは実行されないので、問題なくなる。
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time);

    return () => {
      // debugger
      // // console.log('updated end');
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
