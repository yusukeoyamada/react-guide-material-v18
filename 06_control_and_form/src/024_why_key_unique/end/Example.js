import "./Example.css";
import { useState } from "react";

const Example = () => {
  const inputFact = () => ({
    key: Math.floor(Math.random() * 1e3),
    value: <input />,
  });

  const [inputs, setInputs] = useState([inputFact(), inputFact(), inputFact()]);

  const unshiftInput = () => {
    setInputs((prev) => [inputFact(), ...prev]);
  };
  return (
    <>
      <button onClick={unshiftInput}>先頭に追加</button>
      <div className="flex">
        <div>
          <strong>{`key={ユニークキー}`}</strong>
          <ul>
            {/* 以下の配列のindexをkeyに設定した場合の問題点の観点から、
            keyには、配列のindex以外の一意の値を設定するべき。 */}
            {inputs.map((input) => (
              <li key={input.key}>
                {input.key}: {input.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <strong>{`key={index}`}</strong>
          <ul>
            {/* 配列のindexをキーに設定すると
              ・配列に要素を追加した際、indexに紐づく値が変わってしまう
                (元のindexが0のものが、indexが1になってしまうので、それに伴って値も紐づかれる)
              ・値がズレて紐づかれるので、余分な変更が発生し、パフォーマンスが多少悪くなる。
            */}
            {inputs.map((input, index) => (
              <li key={index}>
                {input.key}: {input.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Example;
