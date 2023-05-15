import { useState } from "react";

// POINT stateとコンポーネントの関係
const Example = () => {
  const [ toggle, setToggle ] = useState(true);
  const toggleComponent = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>

      {/* POINT コンポーネントの位置によってstateが識別される */}
      {/* 以下のような記載だと、Reactツリーの位置が同位置なので、stateが引き継がれてしまう。 */}
        {/* {toggle ? <Count title="A"/> : <Count title="B"/>} */}
      {/* なので、以下のように、一意の値を設定できるkeyを設定すると、Reactツリーの位置が同位置であっても、stateが引き継がれない */}
        {/* ただし、toggleが変更されるごとに、初期化されるように。 */}
      {toggle ? <Count key="A" title="A"/> : <Count key="B" title="B"/>}

      {/* 以下のような記載だと、Reactツリーの位置が変わったとみなされるので、stateが引き継がれない。 */}
        {/* ただし、toggleが変更されるごとに、初期化される */}
      {/* {toggle ? <Count title="A"/> : <div><Count title="B"/></div>} */}

      {/* 以下のような記載だと、stateが引き継がれない。 */}
        {/* そして、Bだけtoggleが変更されるごとに、初期化される */}
      {/* <Count title="A"/>
      {toggle && <Count title="B"/>} */}
    </>
  )
}
const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
