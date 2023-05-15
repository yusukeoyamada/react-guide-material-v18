
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // 配列をList表示する方法
  // (1) POINT for文でJSXの配列を作成
  const animalList = [];
  for (const animal of animals) {
    // Listの末尾に追加
    animalList.push(<li>{animal}</li>);
  }

  // (2) POINT map関数でJSXの配列を作成
  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* 以下がfor文を使って配列を表示する方法 */}
          {/* <li>{animals[0]}</li>
          <li>{animals[1]}</li>
          <li>{animals[2]}</li> */}
            {/* 上記が以下で補える(配列をjsx方式で記入すると、勝手に中身を展開してくれる) */}
              {/* {animalList} */}

        {/* 以下がmap関数を使って配列を表示する方法 */}
          {/* {helloAnimals} */}

        {/* POINT map関数は式なので、JSX内に記述可能 */}
          {/* 式ゆえに、jsx内に記述が可能なので、for文よりmapがよく使われる。 */}
        {animals.map((animal) => <li>Hello, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
