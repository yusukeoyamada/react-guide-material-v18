
import { useRouter } from "next/router";

// 以下数値関係なく、「/07_router/」以降のルーティングが可変。
  // http://localhost:4000/07_router/hello/setting
    // もっとも、「/07_router/blog」は既に存在する為、
    // 明示的に指定されたフォルダ名と同様のファイル名があった場合、そちらが優先される。

// また、ダイナミックルーディングは、1つの階層に1つしか設定できないので、以下のようにはできない。
  // [name]/
  // [number]/
  // blog/

export default function Setting({ query }) {
  // console.log(query.name);
    // 下記getServerSidePropsで指定したpropsが渡ってくる。

  // useRouter: React Hooksの機能
    // パスの情報、クエリパラメーター、画面遷移を行う為のメソッドの情報が格納されている。
      // パスの情報: 「router.query.name」
      // クエリパラメーター(/07_router/hello/setting?key1=value1&key2=value2): 「router.query」
        // queryの中身に、{ key1: value1, key2: value2}が含まれる。
  const router = useRouter();
  const clickHandler = () => {
    // router.pushのドキュメント (第2引数にoptionが指定できるが、ほとんど使わない)
      // https://nextjs-ja-translation-docs.vercel.app/docs/api-reference/next/router#routerpush
        // router.push('/')                   // ルートディレクトリに遷移。
        // router.push('/', '/dummy-url')     // ルートディレクトリに遷移するが、URLは「/dummy-url」と。
        // router.replace('/', '/dummy-url')
          // ルートディレクトリに遷移するが、URLは「/dummy-url」と。
          // 加えて、遷移前のURLの履歴が、遷移後のURLの履歴に置き換わってしまうので、
            // ブラウザバックをしても、遷移前のURLには戻らず、遷移前のURLの前に表示していたURLに移ってしまう。
              // 「router.push」の場合は、履歴の追加だけなので、遷移前のURLに戻る。
                // 基本的には、「router.push」を使う。
    // router.back()                          // 1つ前のURLに移る。
    router.reload()                           // 画面を更新できる。
  }
  return (
    <>
      {/* 以下のようにすれば、propsで渡さなくとも、queryを取得できる。 */}
      <h1>routerから取得:{router.query.name}</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  )
}

// getServerSideProps関数 (関数名はこれにする)
  // SSRというサーバーサイドでhtmlを構築するときの
  // 関数コンポーネント(例: Setting)のpropsを定義する際に使用する。
    // 第1引数: context
      // queryプロパティ: [name]で指定された動的なルーティング、クエリパラメーターが格納される。
export async function getServerSideProps({ query }) {
  // console.log(context.query);
    // 「{name: 'a'}」が出力: 「name」部分は、フォルダ名([name])と一致。
  return {
    props: { query }
    // props: { hello: 'こんにちは' }
  }
}
