// POINT Reactと純粋関数
let value = 0;

const Child = () => {
  value++;
  return <div>{value}</div>
}

const ChildPure = ({ value }) => {
  return <div>{value}</div>
}

// 以下は、純粋関数である必要あり。
  // 以下のように、関数外で定義したものを使用してはならない。
    // let value = 0;
const Example = () => {
  // 関数内で、変数を定義する必要あり。
  // 関数外で定義した変数を利用してはならない(定数は除く)。
  let value = 0;

  return (
    <>
      <Child/>
      <Child/>
      <Child/>
      {/* 以下のような形で、propsで渡すようにして、引数として渡す */}
      <ChildPure value={++value} />
      <ChildPure value={++value} />
      <ChildPure value={++value} />
    </>
  );
};

export default Example;
