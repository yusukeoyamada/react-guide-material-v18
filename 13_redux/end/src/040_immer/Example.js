// POINT immerでイミュータブルな操作を行う方法
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store"

// immerを使用する場合
import "./immer";

const Example = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example;
