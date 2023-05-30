import Header from "../header";

export default function Layout2({ children }) {
  return (
    <>
      <Header position="bottom" />
      <main className="layout2">
        {children}
      </main>
    </>
  );
}

// 以下のように、「_app.js」で使用する。
// そうすると、ヘッダーが下に表示される。
  // <AppProvider>
  //   <Layout2>
  //     <Component {...pageProps} />
  //   </Layout2>
  // </AppProvider>
