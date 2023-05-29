// POINT 素のReduxでグローバルな状態管理を記述してみよう
  // redux-toolkitを使う方が公式的には推薦しているが、ここでは素のreduxを使う。
import Counter from "./components/Counter";

// 以下provider, storeを使う。
import { Provider } from "react-redux";
// 指定したディレクトリにindex.jsがあれば、それが読み込まれる。
import store from "./store"

const Example = () => {
  return (
    // valueの代わりに、storeを使う。
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Example;
