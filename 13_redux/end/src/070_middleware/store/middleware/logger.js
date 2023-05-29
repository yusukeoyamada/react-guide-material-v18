// 以下、middlewareを定義(作成)する関数のサンプル
  // 以下の構造は、reduxの仕様
  // 全てのdispatch関数実行に際して、何らかの共通処理を施したい場合に使用。
    // あまり使われない。
// const reduxMiddleware = (store) => {
//   return (next) => {
//     return (action) => {
//       // 全てのdispatch関数が実行されると必ず通る部分。middlewareとはそういうもの。
//         // この部分のstoreは、以下actionに応じて変更される前の状態
//           // store.getState()でステートを取得できる
//         // 以下により、actionに応じて、reducerが実行される。
//       next(action);
//       // この部分のstoreは、上記actionに応じて変更された後の状態
//     };
//   }
// }
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('変更前', action, store.getState())
      next(action);
      console.log('変更後', action, store.getState())
    };
  };
};

export default logger;
