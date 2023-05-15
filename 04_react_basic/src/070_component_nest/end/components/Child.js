// POINT List コンポーネントを名前付き import
  // 「.js」がなくとも、webpackというモジュールバンドラーが自動的に認識してくれる。
import { List } from "./List";
import "./Child.css";

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};

// POINT コンポーネントを default export
export default Child;

/* POINT default export の別の記法
export default () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};
 */
