// POINT コンポーネントをダイナミックインポート
import { useState, lazy, Suspense, startTransition } from "react";

// コンポーネントのダイナミックインポートには、以下のように、lazy関数を使用する。
const LazyComponentA = lazy(() => import('./components/ComponentA'))
const LazyComponentB = lazy(() => import('./components/ComponentB'))

const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      <button onClick={() => {
        // startTransition: 「LazyComponentB」が表示されるまで「LazyComponentA」を表示させておきたい時に使用。
          // 引数にコールバック関数を指定して、その中で、AとBを切り替える条件となる状態を変更する処理を記載する。
        startTransition(() => {
          setCompA((prev) => !prev)
        })
      }}>
        ComponentA
      </button>

      {/* Suspenseは、以下のように返答待ち状態を考慮して、コンポーネントを描画する際に使用する。 */}
        {/* fallbackに渡されたコンポーネントが、Suspenseで囲ってあるコンポーネントが表示されるまで表示される。 */}
      <Suspense fallback={<div>Loading!!!!!!!!</div>}>
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </Suspense>
    </>
  );
};

export default Example;
