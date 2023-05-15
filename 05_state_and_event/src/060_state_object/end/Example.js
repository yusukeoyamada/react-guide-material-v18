import { useState } from "react";
// POINT プリミティブ型：1, "str", bool, 10n(BigInt), Symbol(), null, undefined
// POINT オブジェクト型：{}, []などのプリミティブ型以外

// POINT オブジェクト型のstateを変更する場合には必ず新しいオブジェクトを作成する！
const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    person.name = '';
    console.log({ ...person, name: e.target.value, age: 20 })
    // オブジェクト型のstateを変更する場合の注意点
      // 以前のオブジェクトとは別の{}(オブジェクト)で書き換える値を設定する。
        // 以下のように、同じオブジェクトを設定すると、input時などに値を変更できなくなる。
          // person.name = e.target.value;
          // setPerson(person);
      // 元々のプロパティと同じ構造で更新する必要がある。
        // setPerson({ name: e.target.value, age: person.age })
          // ageを書かないと、ageプロパティがない状態で、stateが更新される。
    // 以下のように、personを展開して、更新するプロパティだけ、後に記載するという方法もある。
    setPerson({ ...person, name: e.target.value })
  }
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value })
  }
  // (e)の「e」は省略可能
  const reset = () => {
    setPerson({ name: "", age: "" })
  }
  return (<>
    <h3>Name:{person.name}</h3>
    <h3>Age:{person.age}</h3>
    {/* valueに値を設定すると、初期値が設定されるように */}
    <input type="text" value={person.name} onChange={changeName} />
    {/* 「type="number"」にすると、右側に上下の矢印が生まれる */}
    <input type="number" value={person.age} onChange={changeAge} />
    <div>
      <button onClick={reset}>リセット</button>
    </div>
  </>);
};

export default Example;
