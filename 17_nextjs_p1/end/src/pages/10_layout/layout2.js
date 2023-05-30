import Layout2 from "../../components/layout/layout2"

export default function Page() {
  return (
    <div>
      <p>レイアウト2: ヘッダーがBOTTOMにある</p>
    </div>
  );
}

// 以下引数のpageには、「<Component {...pageProps} />」が入ってくる。
  // 参考: 「17_nextjs_p1\end\src\pages\_app.js」
    // ※ 補足
      // Javascriptでは、関数はオブジェクトとして使用できるので、
      // 関数にプロパティを追加することができる。
Page.getLayout = (page) => {
  return <Layout2>{page}</Layout2>
}