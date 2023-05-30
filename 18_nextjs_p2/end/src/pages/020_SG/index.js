// Static Site Generation (静的サイト生成: htmlを作成)
  // 「package.json」に、「"export": "run-s build next:export"」を追加。それを実行。
    // ビルドしたものを、静的サイトとして出力するコマンド。htmlファイルが出力される。

// POINT getStaticPropsでSGを実装
export default function IndexPage({ message }) {
  return <h3>SG:{message}</h3>;
}

// 以下は、SG(静的サイト生成)の時に使用するもの
  // ビルドのタイミングで実行されるもの
export async function getStaticProps() {
  // ビルド時に実行されることを確認する為。
    // console.log('getStaticProps');

  // 以下propsは、上記IndexPageコンポーネントのpropsとして渡る。
    // 戻り値が「_next\data\fFsfYy7KdsMdTyr30Xu7z\020_SG.json」のように、json形式で保存される。
      // SSRの場合は、getServerSideProps関数を実行して、その結果として、jsonをブラウザは受け取る。
      // SGの場合は、既にjsonが作成されており、それをブラウザは受け取る。
        // 画面遷移の際に、そのjsonを使う。
  return {
    props: { message: 'From Static Props' }
  }
}

// ※ 前提
// (1) `npm run build`
  // 「.next」フォルダ内に、静的なファイルが生成される。
    // これを元にhtmlを作成するのが、「export」コマンド。
  // 「getServerSideProps」が記載されていると、レンダリング方法がSSRと指定される。
    // ```
    // Page                                       Size     First Load JS
    // ┌ ○ /                                      325 B          81.7 kB
    // ├   /_app                                  0 B            81.4 kB
    // ├ ○ /010_SSR                               411 B          81.8 kB
    // ├ ● /020_SG                                299 B          81.7 kB
    // ├ ● /020_SG/[id]                           398 B          81.8 kB
    // ├   ├ /020_SG/1
    // ├   └ /020_SG/2
    // ├ ● /030_SG_fetch (352 ms)                 634 B            82 kB
    // ├ ● /030_SG_fetch/[detail] (1295 ms)       517 B          81.9 kB
    // ├   ├ /030_SG_fetch/3 (333 ms)
    // ├   ├ /030_SG_fetch/1 (312 ms)
    // ├   ├ /030_SG_fetch/2
    // ├   ├ /030_SG_fetch/4
    // ├   └ /030_SG_fetch/5
    // ├ ○ /040_api_routes                        15.4 kB        96.8 kB
    // ├ ○ /404                                   193 B          81.5 kB
    // ├ λ /api/articles                          0 B            81.4 kB
    // └ λ /api/hello                             0 B            81.4 kB
    // + First Load JS shared by all              81.4 kB
    //   ├ chunks/framework-a87821de553db91d.js   45 kB
    //   ├ chunks/main-90bdee2f64d2b412.js        28.7 kB
    //   ├ chunks/pages/_app-22d5c5742d1092c3.js  6.83 kB
    //   ├ chunks/webpack-9b312e20a4e32339.js     836 B
    //   └ css/3a770aacb0f6edfc.css               652 B

    // λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
    // ○  (Static)  automatically rendered as static HTML (uses no initial props)
    // ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
    // ```
// (2) `npm run next:export`
  // [x] 「18_nextjs_p2\end\src\components\header\index.js」のImageコンポーネントの画像のリサイズ処理に関して、エラーが
    // 「18_nextjs_p2\end\next.config.js」にて、`画像のリサイズ処理をカスタマイズできるように設定し、画像をそのまま渡す`ことに。
  // [x] `pages with getServerSideProps can not be exported.`
    // 「18_nextjs_p2\end\src\pages\010_SSR\index.js」: 
      // `exportコマンドは、htmlファイルを作成して、それをホスティングすることで、サーバーが無くても動くようにする`もの。
        // しかし、`getServerSidePropsは、Node.js上で動く`。なので、`exportしたいときは、コメントアウト`しておく。
// (1-2) 上記を一度に `npm run export` (「npm-run-all」パッケージで、一括実行コマンド(-s)を使えるように。Linux系(mac)なら「&&」で繋げても良い)
  // `export先は、「out」`フォルダ。
    // 「Alt + Shift + F」: フォーマットをかけられる。
    // `「out」ディレクトリをレンタルサーバーなどにホスティングすれば、Node.jsが無くても、動く`。
      // 確認方法は、以下
        // 「Ctrl + Shift + N」: 新規ウィンドウを開く。
        // 「out」ディレクトリだけ読み込む。
        // `Live Serverで起動`。

// ※ 問題点
// 「/020_SG」というパスにアクセスしても、`「.html」という拡張子の記載がない為、ページが表示できない`。
  // `画面遷移`の場合は、`jsで画面遷移するので、問題なく表示`される。
  // `リロードや、直でURLを指定`した場合には、`表示されない`。
    // 以下を設定すると解決。
      // 「18_nextjs_p2\end\next.config.js」
        // `URLの末尾に「/」が付く`ように。
          // 以下サーバーの挙動が理由で、URLの末尾に「/」を付ければ、適切に動くように。
            // `リクエストがきたら、フォルダかファイルに一致するものがないか`を確認。
            // 次に、`「/」の場合は、デフォルトで表示する、index.htmlを`返す。
          // ```
          // const nextConfig = {
          //   // URLの末尾に「/」をつけるかどうかを設定できる。trueなら付く。
          //   trailingSlash: true,
          // };
          // ```