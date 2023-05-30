// POINT [SSR]ダイナミックルーティング
  // 以下数値関係なく、「/07_router/blog/」以降のルーティングが可変。
    // http://localhost:4000/07_router/blog/1
    // http://localhost:4000/07_router/blog/2
    // http://localhost:4000/07_router/blog/aa
    // http://localhost:4000/07_router/blog/bb

export default function Number() {
    return <h1>[number].js</h1>
}