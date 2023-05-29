import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter";

// 以下は、redux-toolkitを使用した場合
  // createStore, combineReducersの代わり
  // 引数にオブジェクトを取るのは、combineReducersと同様。
    // reducerというプロパティを取るのが違い。
export default configureStore({
  reducer: {
    counter: reducer
  }
});
