// POINT [SSR]とgetServerSideProps
import { useEffect, useState } from "react"

// 以下のような形で、Next.jsでは、CSRとSSRが共存している。
// Node.jsで関数コンポーネントが実行されるタイミング。
  // 初回のレンダリング(リロード含む): Node.jsで関数コンポーネントが実行される。
    // この時は、SSR。
  // 画面遷移した時: Node.jsで関数コンポーネントが実行されない。
    // あくまで、ブラウザ上でのみ、関数コンポーネントが実行される。これをCSRという。
// 以下は、getServerSidePropsでpropsを指定した場合
  // export default function SSR({message}) {
    // 画面遷移した時のようなCSRでレンダリングしたときは、
    // getServerSidePropsで渡したpropsは、json形式でNode.jsから受け取る。
      // 検証ツールのネットワークで確認できる。
export default function SSR() {
  // 以下により、Next.js上では、Node.js上とブラウザ上で関数コンポーネントが実行されていることが分かる。
    // 以下が2回実行されているときは、以下の「reactStrictMode」がtrueになっている為。
      // 参考: 「18_nextjs_p2\end\next.config.js」
  console.log('hello')
  // console.log(message)

  // useEffect内の記述は、ブラウザ上で実行される。
  useEffect(() => {
    console.log('useEffect');
    // Node.js上には、windowオブジェクトがない為、useEffectで囲み、ブラウザ上で実行する必要あり。
    window.localStorage.setItem('key', 'value');
    // 「path=/」で、cookieが設定されるパスを指定できる。そこに、「val=0」というcookieが設定される。
    document.cookie = 'val=0; path=/;'
  }, [])

  // 以下の変数やstateの値は、Node.js上に補完されており、それが置換されている。
    // 具体的には、
      // SSRの場合、Node.jsのサーバーに対して、リクエストが送信されて、
      // そのリクエストを受け取ると、関数コンポーネントが実行される。
      // そして、関数コンポーネントが実行されると、少なくとも、valが0に、stateが'bye'に置換されて、jsxが返される。
      // そして、そのjsxがReact要素になって、htmlに保管されてから、ブラウザにレスポンスとして返却される。
        // つまり、SSRの場合は、htmlを既に出来上がった状態にした上で、ブラウザに対して、返却される。
    // なぜ上記のようなことができるか。
      // Reactは仮想DOMを内部で保持し、疑似的にNode.js上でDOMツリーのようなものを作成できる。
      // それを元にして、htmlを作成できるので、Node.js上で、値が置換された状態でレスポンスを返すことができる。
    // SSRの注意点
      // Node.jsと、ブラウザ上の2つで関数コンポーネントが実行される。
        // 実質的には、初回のリクエストの場合は、Node.jsでhtmlが作成されるので、基本的には、追加でブラウザ上でhtmlに挿入する操作はしない。
        // ただ、useEffectなどを使うと、その部分に関しては、ブラウザ上で実行される。
  const [state, setState] = useState('bye');
  const val = 0
  return (
    <>
      <h3>SSR</h3>
      <h3>{state}</h3>
    </>
  )
}

// 以下関数は、Node.js上で実行される関数
  // contextにリクエストとレスポンスの情報が格納される。
// pagesフォルダ内でしか使用できない。
// exportコマンドは、htmlファイルを作成して、それをホスティングすることで、サーバーが無くても動くようになる。
  // しかし、getServerSidePropsは、Node.js上で動く。なので、exportしたいときは、コメントアウトしておく。
// export async function getServerSideProps(context) {
//   const { cookie } = context.req.headers;
//   console.log('cookie', cookie);
//   console.log('getServerSideProps is executed')

//   // ここでwebサーバー上で行う処理を記載できる。
//     // 上記SSRコンポーネントで使える、propsを指定できる。
//   return {
//     // 以下で、上記SSRコンポーネントが実行されたときに、以下URLにリダイレクトできる。
//       // 「permanent: false」とすると、一時的にリダイレクトするという指定ができる。
//         // 上記は、Googleのクローラーがどう捉えるかの問題。リダイレクト処理が行われることは変わらない。
//     // redirect: {
//     //     destination: '/',
//     //     permanent: false
//     // },
//     props: { message: 'From Server Side Props' }
//   }
// }
