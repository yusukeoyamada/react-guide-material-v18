import { useRef, forwardRef } from "react";

/* POINT forwardRef
  親から子コンポーネント内の DOM に直接アクセスしたいときに使います。
    refは、親から子コンポーネントへprops形式で渡して参照するということができないため、
    参照したい場合は、子コンポーネント内でfowardRefを使用する必要があります。
*/
// (2)方法: forwardRefの引数として、コンポーネントを渡す。
  // コンポーネントの第1引数: props
  // コンポーネントの第2引数: refオブジェクト
const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      {/* refは、propsとして渡すことは推奨されていない。 */}
      {/* (1)方法: refをcustomRefなどの別の名前のpropsにして渡す。 */}
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
