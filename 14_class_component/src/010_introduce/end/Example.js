// POINT クラスコンポーネントの定義方法
// 継承元のComponentをimportする必要が。
import { Component } from "react";

class Example extends Component {
  // renderメソッドにより、return文を使って、JSXを返す役割を持つ
  render() {
    return (
      <h3>I'm Class Component</h3>
    );
  }
}

// 以下が関数コンポーネントの場合
// const Example = () => {
//   return (
//     <h3>I'm Function Component</h3>
//   );
// };

export default Example;
