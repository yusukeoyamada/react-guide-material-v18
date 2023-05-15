import Child from "./components/Child";

const Example = () => {
const hello = (arg) => `Hello ${arg}`;
  // const o = {
  //   color: "red",
  //   num: 123
  // }
  return (
    <>
      <Child 
        // POINT propsには全てのタイプの値を渡すことができます。
        color="blue"
        num={123}
        // 上記2つの代わりに、「color={o.color}」や、「num={o.num}」とせずとも、
        // 「{...o}」で、中身を展開する形でも同義
        fn={hello}
        // bool={true}と同義
        bool
        obj={{ name: 'Tom', age: 18 }}
      />
      <Child color="red" />
    </>
  )
};

export default Example;
