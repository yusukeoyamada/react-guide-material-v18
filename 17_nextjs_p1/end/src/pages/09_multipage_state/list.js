import List from "../../components/list";

import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";

export default function PageList() {
  const [list] = useAppContext();
  const router = useRouter();

  // next.jsでなければ、以下をAppProviderを囲むという処理をすれば、
  // AppProviderで囲んだ部分だけで、stateを共有できる。
    // next.jsであれば、「17_nextjs_p1\end\src\pages\_app.js」内で、
    // ページ全体で共通化したい処理が記載でき、そこで、AppProviderを囲むという処理を追加する。
  return (
    <>
      <List list={list} />
      <button onClick={() => router.back()}>前のページへ</button>
    </>
  );
}
