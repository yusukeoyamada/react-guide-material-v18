import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { asyncCount } from "../../api/counter"

const counter = createSlice({
  name: 'counter',
  // 以下にて、statusというプロパティを追加。
  initialState: {
    count: 0,
    status: ''
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
  },
  // 以下にて、addAsyncWithStatus(createAsyncThunkを使用したもの)を使用
    // 条件分岐が生じるようなstateの更新は、extraReducersに記載。
  extraReducers: (builder) => {
    // 読み込み中
      // 非同期処理の状態: 「addAsyncWithStatus.pending」
        // 自動的に設定される。
    builder.addCase(addAsyncWithStatus.pending, (state) => {
      state.status = 'Loading...'
    })
    // 完了
    .addCase(addAsyncWithStatus.fulfilled, (state, action) => {
      state.status = '取得済'
      // action.payload: addAsyncWithStatusの第2引数の戻り値(response.data)
      state.count = state.count + action.payload;
    })
    // 失敗
    .addCase(addAsyncWithStatus.rejected, (state) => {
      state.status = 'エラー'
    })
  }
});

const { add, minus } = counter.actions;

// 以下は、新たに追加したもの
  // createAsyncThunkを使用: redux-toolkitで使用。
    // 第1引数: typeに相当 (action.typeで取れる??)
    // 第2引数: 副作用(非同期処理など) (action.payloadで戻り値が取れる)
const addAsyncWithStatus = createAsyncThunk(
  'counter/asyncCount',
  // 引数はpayload
  async (payload) => {
    const response = await asyncCount(payload);
    return response.data;
  }
)

// 以下は、以前使用していたもの
const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  }
}

export { add, minus, addAsync, addAsyncWithStatus }
export default counter.reducer