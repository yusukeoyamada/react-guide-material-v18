import Header from "../header";

export default function Layout({ children }) {
  return (
    <>
      <Header position="top" />
      <main className="layout1">{children}</main>
    </>
  );
}

// 以下のように、「_app.js」で使用する。
// そうすると、ヘッダーが上に表示される。
  // <AppProvider>
  //   <Layout1>
  //     <Component {...pageProps} />
  //   </Layout1>
  // </AppProvider>
