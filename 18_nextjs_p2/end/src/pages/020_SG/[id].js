// POINT [SG]ダイナミックルーティングの記述方法
import { useRouter } from "next/router";

// 以下propsは、getStaticPropsで指定したものが渡ってくる。
export default function Page({ id, date }) {
  const router = useRouter();
  // 以下paramsのidにない、URLにアクセスした際に、Node.jsは、適合するページを自動生成する。
    // ページが作成されるまで、「router.isFallback」がtrueになる。
  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }

  // ページが作成されると、「router.isFallback」がfalseになり、こちらが流れる。
    // ページ作成の裏で、getStaticProps等がNode.js内で走って、idの追加等がなされる。
      // getStaticPropsはビルド時にのみ実行されると言ったが、
        // fallbackがtrueでページが存在しない場合は、Node.js上で実行される。
  return <h3>このページは{id}です。{date}</h3>;
}

// ファイル名が動的([id])になっている為、ビルド時にファイルが読み込めない。
  // 上記を解決する為に、以下を記載。
export async function getStaticPaths() {
  console.log("getStaticPaths executed");

  return {
    // 以下のようにpathで指定すると、以下のようにparamsに応じたファルダが作成され、動的ルーディングに適応した形になる。
      // 「020_SG\1\index.html」
      // 「020_SG\2\index.html」
    // 以下paramsのidは、文字列で。
    paths: [
      { params: { id: "1" } }, 
      { params: { id: "2" } }
    ],
    // 以下のように「blocking」にすると、
    // 上記「Loading」部分が表示されず、ページ作成が完了するまでペンディングする。
    fallback: "blocking",
  };
}

// 引数として、contextが渡され、そこには、getStaticPathsで指定したparamsが格納されている。
  // そして、getStaticPropsは、pathsの要素分だけ呼ばれるので、毎度paramsのidの値は変わる。
export async function getStaticProps({ params }) {
  console.log("getStaticProps executed");

  const date = new Date;
  // pathsの要素分だけ変化したparamsのidを以下で指定することで、
  // URLごとに、propsのidの値を変更できるように。
  return {
    props: {
      id: params.id,
      date: date.toJSON()
    },
    // revalidate: 5
  };
}
