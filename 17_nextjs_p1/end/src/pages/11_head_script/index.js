// POINT <head>内への挿入方法と<script>タグの挿入方法
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";

export default function Page() {
  const [ load, setLoad ] = useState(false);

  return (
    <>
      {/* <Head>タグは複数記述できる。分割して管理したい時等便利。最終的に一括で表示される。 */}
      <Head>
        <title>ページのタイトル</title>
        <meta property="og:title" content="ページのタイトル" />
      </Head>

      {/* 基本的に、ライブラリは、package.jsonで読み込んで使用する。
      以下のように、コンポーネントに埋め込むのは、稀。 */}
        {/* publicフォルダ内のjsファイルを読み込んでいる。 */}
      <Script src="/jquery-3.2.1.min.js"
        // strategyで、スクリプトの読み込み方法を変更できる
          // afterInteractive(デフォルト): 
            // 画面が表示された後に、Scriptタグが挿入されて、ロードされる。
              // next.jsでサーバーからhtmlを返す段階では、当該Scriptが挿入されていない状態。 
          // beforeInteractive: 
            // 画面が表示される前に、Scriptタグが挿入されて、同時にロードされる。
              // next.jsでサーバーからhtmlを返す段階で、既に当該Scriptが挿入されている状態に。
          // lazyOnLoad: 
            // ブラウザの処理に空きができたら、当該Scriptを読み込む(優先度が低い処理等が対象)
        strategy="lazyOnLoad" 
        // onLoadは、スクリプトのロードが完了したら行う処理を記述
        onLoad={() => setLoad(true)}
        // onErrorは、スクリプトのロードが失敗したら行う処理を記述
        onError={e => {
          console.error(e)
        }}
      />
      <h3>jQuery loaded: {load ? "true" : "false"}</h3>

      {/* インラインでScriptを埋め込みたい場合 */}
      <Script dangerouslySetInnerHTML={{
        __html: `console.log('Inline Script')`
      }} />
    </>
  )
}
