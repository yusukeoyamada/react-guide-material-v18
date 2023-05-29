import { createStore, combineReducers } from "redux";

const initialState = 0;
const reducer = (state = initialState, { type, step }) => {
  console.log(type);

  // dispatch関数が実行された場合、reducerとreducer2、どちらも実行される為、
  // 以下switch文の条件が重複していると、counterとcounter2、どちらも更新されてしまう。
    // そこで、識別できるように、以下のようにswitch文の条件に違いを持たせる必要がある。
  switch (type) {
    case "counter/+":
      return state + step;
    case "counter/-":
      return state - step;
    default:
      return state;
  }
};
const reducer2 = (state = initialState, { type, step }) => {
  console.log(type);

  switch (type) {
    case "counter2/+":
      return state + step;
    case "counter2/-":
      return state - step;
    default:
      return state;
  }
};

// combineReducersを使うことで、複数のreducerをstoreに登録することができる。
const reducers = combineReducers({
  counter: reducer,
  counter2: reducer2,
});

export default createStore(reducers);
