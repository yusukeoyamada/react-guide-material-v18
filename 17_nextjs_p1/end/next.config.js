/** @type {import('next').NextConfig} */

// Next.jsに関する設定を定義
const nextConfig = {
  reactStrictMode: true,
  // 以下でダミーURLと、本来のURLを紐づけている。
    // 画面に出ているURLとは別のコンポーネントを動かしたい場合に、rewritesを使う。
      // source: ダミーURL
      // destination: 本来のURL(クエリパラメーター含む)
  async rewrites() {
    return [
      {
        source: '/personal',
        destination: '/08_multipage?step=1'
      },
      {
        source: '/confirm',
        destination: '/08_multipage?step=2'
      }
    ]
  }
};

export default nextConfig;
