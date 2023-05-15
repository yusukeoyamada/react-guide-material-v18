import AnimalItem from "./AnimalItem";
const AnimalList = ({ animals }) => {
  // 以下の記述は、Listの表記に関わる為、このコンポーネント内で記述した方が綺麗。
  if (animals.length === 0) {
    return <h3>アニマルが見つかりません。</h3>;
  }
  
  return (
    <ul>
      {animals.map((animal) => {
        // AnimalItemのliでkey設定するのではなく、ここでkey設定する
          // ループ処理の直下で、key設定する必要あり。
            // ここでコンポーネントDOMが順に生成されるから
        return <AnimalItem animal={animal} key={animal} />;
      })}
    </ul>
  );
};

export default AnimalList;
