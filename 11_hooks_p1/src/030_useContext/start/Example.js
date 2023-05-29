import Child from "./components/Child";

const Example = () => {
  const value = 'hello'
  // 以下、valueをpropsで、GrandChildまで渡すことを、propsのバケツリレーという
    // これは手間。そこで、useContext()を使う。
  return <Child value={value}/>;
};

export default Example;
