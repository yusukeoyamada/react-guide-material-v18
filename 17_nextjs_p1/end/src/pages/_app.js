//　POINT _app.jsには、ページ全体で共通化したい処理を記述
  // pagesフォルダのコンポーネントが実行される前に必ずここが通る。
import "../styles/globals.css";
import { AppProvider } from "../context/AppContext";
import Layout1 from "../components/layout/layout1";

// 引数Component: 各コンポーネント
// 引数pageProps: 各コンポーネントに渡す、props
function MyApp({ Component, pageProps }) {
  // 以下でだけ、コンポーネントに、getLayoutというプロパティを設定しているという前提
    // 「17_nextjs_p1\end\src\pages\10_layout\layout2.js」
      // ()で、「(page) => <Layout1>{page}</Layout1>」を囲むのは、区切りを指定する為。
      // 以下、pageに入るのは、ここでは「<Component {...pageProps} />」
        // 「<Component {...pageProps} />」が「Layout1」で囲まれるという意味。
          // 以下、デフォルト例
            // <AppProvider>
            //   <Layout1>
            //     <Component {...pageProps} />
            //   </Layout1>
            // </AppProvider>
  const getLayout = Component.getLayout ?? ((page) => <Layout1>{page}</Layout1>)

  // 以下にて、AppProviderで囲み、ページ全体でstateを共有
  return (
    <AppProvider>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );

  // 元は以下だけ
    // return <Component {...pageProps} />;
}

export default MyApp;
