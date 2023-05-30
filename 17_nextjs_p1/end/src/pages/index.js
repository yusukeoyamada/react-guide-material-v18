// Linkコンポーネントを使って、画面遷移。
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* 以下、クエリパラメーターも指定する場合 */}
        {/* 「as="/dummy-url"」は、「/07_router/hello/setting」等では適切に遷移しない。 */}
        {/* 理想的な挙動としては、「/07_router/hello/setting」に遷移するが、URLには「/dummy-url」と表示される。 */}
      <Link href={{ pathname: "/07_router", query: { key: "value" } }} as="/dummy-url">
        <a>/07_router</a>
      </Link>
      {/* 以下、Linkコンポーネントを利用した場合には、遷移後にリロードが走らない。 */}
      <Link href="/07_router/hello/setting">
        <a>/07_router</a>
      </Link>
      {/* 以下、aタグを利用した場合には、遷移後にリロードが走る。 */}
      <a href="/07_router/hello/setting">
        /07_router
      </a>
    </>
  );
}
