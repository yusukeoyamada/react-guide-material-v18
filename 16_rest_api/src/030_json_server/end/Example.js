// POINT JSON server とは
  // APIのモックを手軽に作成できる、node.jsのライブラリです。
  // APIモックとは、モックアップのことで、開発環境用の簡易APIのことです。
    // 特定のリクエストを送信すると、JSONを返してくれるサーバーを簡易的に作成してくれる。
      // APIモックを使用することで、開発・テスト用の疑似的なレスポンスを簡単に取得できる。
        // パフォーマンスや、サーバーの安定的な稼働の観点から、本番環境では使用しない方が良い。

// JSON server をインストールする
  // 「npm i -D json-server」

// json ファイルを用意する
  // 参考: 16_rest_api\db\db.json
    // オブジェクト形式で、パス名をkeyにする
      // {
      //   "パス名": json形式のデータ
      // }

// 以下でjsonサーバーを起動。「**」とすることで、複数フォルダのjsonファイルを指定できる。
  // 「npx json-server -w src/**/db.json」
    // 「-w」: watchオプション。指定したファイルの中身が編集された場合に、再度立ち上げることを指定するオプション。
  // 以下のようにサーバーが立ち上がる。
    // ```
    // Resources
    //   http://localhost:3003/todo
    //   http://localhost:3003/user
    // Home
    //   http://localhost:3003
    // ```
  // ちなみに、以下のようにすると、複数のコマンドを同時に実行できる
    // 「npx concurrently \"npm run start:client\" \"npm run start:api\""」
      // 「concurrently」: 複数のコマンドを実行できる

const Example = () => {
};

export default Example;
