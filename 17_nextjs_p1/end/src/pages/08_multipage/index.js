// POINT 一つのコンポーネントを別のURL表示できるようにする
  // router.push()の第2引数にダミーURLを指定した場合において、
  // ダミーURLを貼り付けて、そのページを表示させようとしても、思ったページに遷移しない。
    // 上記問題を解決する為に、「next.config.js」の「rewrites」に追加で設定
      // 参考: 17_nextjs_p1\end\next.config.js
import { useRouter } from "next/router"

export default function MultiPage() {
  const router = useRouter();
  // 以下がクエリパラメーター
  const step = router.query.step ?? 0;

  const goToStep = (_step, asPath) => {
    // 第1引数: 遷移先のURL
    // 第2引数: 遷移先のURLにて、URLに表示させるURL
    router.push(`/08_multipage?step=${_step}`, asPath);
  }
  
  return (
    <div>
      {/* stepは文字列で渡ってくるので、「==」で比較。 */}
      {step == 0 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(1, "/personal")}>Next Step</button>
        </>
      )}
      {step == 1 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(2, "/confirm")}>Next Step</button>
        </>
      )}
      {step == 2 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(0, "/08_multipage")}>Next Step</button>
        </>
      )}
    </div>
  )
}