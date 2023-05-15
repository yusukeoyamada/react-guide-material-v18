// 問題
  // 仮に別ファイルを用意して、差異を設けても、画面全体に反映されてしまうので、
  // Exampleの方にも適用されてしまい、差異が生まれない。
    // styleがhead部分に適宜反映されているが、styleは後から適用された方が優先される為。
// 解決
  // CSS Moduleを使う。

import "./SubButton.css";

const SubButton = () => {
  return <button className="btn">サブボタン</button>
}

export default SubButton;