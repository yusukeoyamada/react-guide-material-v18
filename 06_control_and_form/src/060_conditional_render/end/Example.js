import { useState } from "react";

/* POINT 条件分岐 if文、&&、??（Null合体演算子）、３項演算子
  A ?? B (Aがnull or undefinedの時、Bを使う)
*/
const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            // 以下は、nullのindexOf()は使えないので、Null合体演算子を使って、""を入れている。
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;

            return isMatch;
          })
          .map((animal) => {
            // POINT if文 (修正箇所が増える点から、三項演算子の方がお勧め)
              // if(animal === "Dog") {
              //   return <li key={animal}>{animal}★</li>
              // } else {
              //   return <li key={animal}>{animal}</li>
              // }
            return (
              <li key={animal}>
                {
                  // POINT 三項演算子
                    // animal + (animal === "Dog"
                    //  ? "★"
                    //  : "")
                  // POINT null合体演算子
                    // 「A ?? B」の場合、Aがnull or undefindなら、Bが。そうでないなら、Aが表示される。
                  animal ?? "null,undefinedでした"
                }
                {/* POINT &&演算子 */}
                  {/* 以下、「animal === "Dog"」がtrueなら、「"★"」が、falseなら、falseが */}
                  {/* jsx記法では、falseは表示されないので、三項演算子の時のように、falseの時に""を設定する必要はない */}
                {animal === "Dog" && "★"}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Example;
