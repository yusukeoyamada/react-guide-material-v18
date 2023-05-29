const initialState = 0;

// 以下、Reducer
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "counter/+":
      return state + payload;
    case "counter/-":
      return state - payload;
    default:
      return state;
  }
};

// 以下、ActionCreater
  // redux-toolkitでは、自動的に作成される。
const add = (payload) => {
  return {
    type: "counter/+",
    payload
  }
}
const minus = (payload) => {
  return {
    type: "counter/-",
    payload
  }
}

export { reducer, add, minus }