const Hello = (props) => {

  // POINT propsは読み取り専用
  // props.name = 'Bob';
  // エラーが発生！

  // オブジェクトの設定状態を見たいときに、「Reflect.getOwnPropertyDescriptor」が使える。
    // オブジェクトには、元々隠し設定(writableとか)がある
  // const desc = Reflect.getOwnPropertyDescriptor(props, 'name');
  // console.log(desc)

  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;