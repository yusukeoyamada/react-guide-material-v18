// POINT useEffectの基礎

import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  // 以下は、レンダリングされる際に呼ばれる。
    // 第2引数に空を設定することで、最初のレンダリング時にのみ、第1引数のコールバック関数が呼ばれることに。
      // stateが更新されているものの、1回だけしか呼ばれない。
  useEffect(() => {
    console.log('useEffect is called');
    // 以下のままだと、stateが更新される度、再レンダリングされるので、
    // 何度も、以下が呼ばれることになり、秒数の進捗が凄いことに。
    window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }, [])
  
  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
