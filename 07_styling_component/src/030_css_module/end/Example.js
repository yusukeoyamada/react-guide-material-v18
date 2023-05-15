/* POINT css moduleのメリットとデメリット
  - メリット
    - class名を気にすることなく、cssを記述することができる(一意のクラス名(例: Example_btn__udWmI)が自動的に設定される為)。
      - 他のコンポーネント用のcssクラスと名前が被ることがないので、重複適用が無くなる。
    - cssと変わらないので、学習コストがない
    - 標準の機能なので、導入コストがない
  - デメリット
    - 将来日推奨になる可能性がある。
      - https://github.com/webpack-contrib/css-loader/issues/1050#:~:text=In%20the%20near%20future%20we%20want%20to%20deprecate%20CSS%20modules
  */

import { useState } from "react";

import SubButton from "./components/SubButton";

// 「styles」として読み込む。ファイル名を「.module.css」とする。
import styles from "./Example.module.css";

// console.log(styles);

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      {/* stylesに記載されている各クラスの呼び出し方は、以下参照 */}
      <button className={`${styles.btn} ${isSelected ? styles.selected : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <SubButton />
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
