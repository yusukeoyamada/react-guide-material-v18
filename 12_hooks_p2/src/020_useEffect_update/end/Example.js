// POINT useEffectの依存配列

import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  // 第2引数を設定しない場合は、useEffectの外側で、第1引数のコールバック関数が呼ばれたのと同義になる。
  useEffect(() => {
    console.log('useEffect is called');
    window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }, [])

  // 第2引数の配列を依存配列と呼ぶ。
    // 依存配列に含めたstateが更新されると、第1引数のコールバック関数が実行される。
  // useEffect(() => {
  //   console.log('updated');
  // }, [time]);
  
  useEffect(() => {
    document.title = 'counter:' + time;
    // 以下で、検証ツールのアプリケーションタグのローカルストレージに保存される。
    window.localStorage.setItem('time-key-end', time)

    // POINT useEffect注意点: 
      // 依存値は、useEffect内で更新しない(無限ループになってしまう)
        // setTime(prev => prev + 1);
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
