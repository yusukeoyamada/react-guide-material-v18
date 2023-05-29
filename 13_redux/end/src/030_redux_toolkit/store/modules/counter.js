// redux-toolkitを使用して、reducerを作成する場合は、以下を使用。
import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: 'counter',
  // 以下で初期値も設定できる。
  initialState: 0,
  reducers: {
    // 今まではtypeによって処理内容を分けていたが、メソッドで分ける。
    add(state, { type, payload }) {
      console.log(type, payload)
      return state + payload;
    },
    minus(state, { type, payload }) {
      console.log(type, payload)
      return state - payload;
    }
  }
})

// 以下、ActionCreater
  // redux-toolkitでは、自動的に作成される。
    // counter.actionsによって、上記reducersに設定した関数名を元に、以下のような関数を取得できる。
    // typeの「counter」は、上記name。「add」は上記reducersに設定した関数名。
// const add = (payload) => {
//   return {
//     type: "counter/add",
//     payload
//   }
// }
// const minus = (payload) => {
//   return {
//     type: "counter/minus",
//     payload
//   }
// }
const { add, minus } = counter.actions;

export { add, minus }
// 「counter.reducer」部分に、reducerは含まれているので、以下のようにdefaultで指定する。
export default counter.reducer