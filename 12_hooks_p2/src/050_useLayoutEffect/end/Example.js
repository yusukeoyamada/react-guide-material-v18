import { useEffect, useState, useLayoutEffect } from "react";

// POINT useLayoutEffectとは？useEffectとの違い
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

  useEffect(() => {
    // console.log('init');
    let intervalId = null;
    intervalId = window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    return () => {
      window.clearInterval(intervalId)
      // console.log('end');
    }
  }, [])
  
  useEffect(() => {
    // console.log('updated');
    
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time);

    return () => {
      // debugger
      // console.log('updated end');
    }
  }, [time]);

  // useLayoutEffectは、useEffectよりも早く(優先して)実行される。
    // ここをuseEffectにすると、useEffectは上から順に実行されるので、
    // アンマウントした後に、マウントした場合、
    // 初期値0が入ってしまい、最初からになる。
      // timeに初期値0が入っている状態で、「window.localStorage.setItem('time-key-end', time);」により、
      // ローカルストレージに、初期値が入ってしまうため。
        // useLayoutEffectにすると、先に(stateの初期化処理の後)ローカルストレージに入っている値を取るので、
        // ローカルストレージに残っている値を、stateに設定でき、カウントが継続しているように見える。
    useEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key-end'));

    // 「NaN」とは、Not a Numberの意味
      // isNaNは、数値でない場合は、trueになる。
    if(!isNaN(_time)) {
      setTime(_time);
    }
  }, [])

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
