/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictModeがtrueだと、検証用に2回実行されることに。
  reactStrictMode: false,
  // URLの末尾に「/」をつけるかどうかを設定できる。trueなら付く。
  trailingSlash: true,
  // Imageコンポーネントの画像のリサイズの設定をカスタムに。
  images: {
    loader: "custom"
  }
};

module.exports = nextConfig;
