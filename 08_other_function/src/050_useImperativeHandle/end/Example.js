import { useRef, forwardRef, useImperativeHandle } from "react";

// POINT 親からのrefへの参照を制限
const Input = forwardRef((props, ref) => {

  // 親から渡ってくるrefと別のものを用意する。
  const inputRef = useRef();
  
  /* POINT useImperativeHandle
    第1引数: 親コンポーネントから受け取ったrefオブジェクト
    第2引数: 追加したいメソッドが格納されたオブジェクトを返す関数
  */
  useImperativeHandle(ref, () => ({
    // 親から渡ってきたref内に以下メソッドを作成。
    myFocus() {
      // 新たに作成したrefを使う。
      inputRef.current.focus();
      console.log('フォーカス取得')
    }
  }))

  return <input type="text" ref={inputRef} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      {/* 親から渡ってきたref自体にメソッドを追加しているので、以下でも使える。 */}
      {/* ただ、子から親へのメソッドの提供は、どこに何が書いてあるか分からなくなってしまうので、辞めた方が良い。
        なので、forwardRefやuseImperativeHandleの使用は、用途を絞って利用した方が良い。 */}
      <button onClick={() => ref.current.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
