import { createSlice } from "@reduxjs/toolkit";

import { asyncCount } from "../../api/counter"

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    }
  }
});

const { add, minus } = counter.actions;

// 以下redux-thunk関数の定義
  // 以下サンプル
  // const thunkFunction = (payload) => {
  //   return (dispatch, getState) => {
  //     副作用処理  
  //   }
  // }
const addAsync = (payload) => {
  // 第1引数: dispatch
  // 第2引数: getState
  return async (dispatch, getState) => {
    // getState: 実行すると、現在のstateを取得できる。
    // const state = getState();
    // console.log(state);

    const response = await asyncCount(payload);

    // dispatch: 実行すると、reducerを呼ぶ。
      // 今回は、response.dataにpayloadが設定されている。
    dispatch(add(response.data));
  }
}


export { add, minus, addAsync }
export default counter.reducer