import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: 'counter',
  // 初期値がオブジェクトの場合
    // 不変性(immutabilty)の保持が必要に
  initialState: {
    count: 0
  },
  reducers: {
    add(state, { type, payload }) {
      // redux-toolkitの中では、ミュータブルな操作が、イミュータブルに行われる。
      // その為、以下のような記述で問題なし。ただし、returnは記載してはいけない。
        // immerというライブラリのおかげ
      state.count = state.count + payload;

      // 以下のような処理が、不変性の保持
        // 既存のオブジェクトと同じ内容の別のオブジェクトを作成し、
        // そこに差分を反映して、反映した別のオブジェクトを使って、stateの更新をすること。
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;

      // 以下のような処理が、不変性の保持
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    }
  }
})

const { add, minus } = counter.actions;

export { add, minus }
export default counter.reducer