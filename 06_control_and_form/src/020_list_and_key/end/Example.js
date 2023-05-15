const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  // 仮想DOMを用いた、差分検出は、先頭の要素から順に行われるため、
  // 一番後ろの要素だけを変更した場合、差分が一番少ないが、
  // 先頭の要素を変更してしまうと、順番が変わったとみなされ、全ての要素を洗い替えすることに。
  //   上記を避けるために、keyを設定すると、差分の識別が正確にできるようになる。
  return (
    <>
      <ul>
        {/*{animalList}  {helloAnimals} */}
        {
          /* POINT 子要素にKeyキーを設定 */
          animals.map((animal) => (
            <li key={animal}>Hello, {animal}</li>
          ))
        }
      </ul>
    </>
  );
};

export default Example;
