import { produce } from "immer";

const state = {
  name: 'Tom',
  hobbies: ['tennis', 'soccer']
}

// const newState = state;
// newState.name = 'John';

// produceの第1引数: コピー元のstate
// produceの第2引数: コールパック関数
// 戻り値: 最終的に行われたイミュータブルな操作の反映結果
const newState = produce(state, draft => {
  // draftは、Proxyでラップされている。
    // Proxyとは、ラップされたオブジェクトに対する操作を検知して、何らかの追加操作を行う。
  // 今回の場合には、draftに対して、以下のようなミュータブルな操作をした場合に、
  // Proxyによって、イミュータブルな操作に変換される。
    // draft.name = 'John';
    // draft.hobbies[0] = 'baseball';
      // 上記のように、多階層のstateでも、イミュータブルな操作に変換される。
  console.log(draft);

  // ミュータブルな操作をした場合は、returnを書かないのがルール。
    // ミュータブルな操作をしていない場合には、ミュータブルな値を返しても問題なし。
  return [];
})

// newStateは、stateのnameが「John」になったものが含まれていたりする。
console.log(state, newState)