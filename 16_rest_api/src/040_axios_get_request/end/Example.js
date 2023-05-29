// POINT axiosでGetリクエスト
  // https://axios-http.com/

import { useEffect } from "react";
import axios from "axios";

// axiosでリクエストを送信
const Example = () => {
  // 非同期通信は、副作用なので、useEffectを使用する。
  useEffect(() => {
    // useEffectの場合、第1引数のコールバック関数に、直接asyncをつけられない為(async () => {})、
    // 以下のように、一旦、async付きの関数を変数に格納して、それを実行するという形を取る必要あり。
    const getUser = async () => {
      // resが返ってくるまで時間がかかる時があるので、
      // resが返ってくるまで待機して、処理を施したい場合には、
      // 以下のように「then」で繋げるか、「await」を使う。
        // axios.get('http://localhost:3003/user').then(res => {
        //   console.log(res.data);
        // });
      // ちなみに、自動的にjsオブジェクトに変換された状態でJSONを取得できるので、
      // 「JSON.parse」で、JSON形式の文字列をJavaScriptが認識できる形に変換する必要はない。
      const res = await axios.get('http://localhost:3003/user')
      console.log(res.data)
    }
    getUser();
  })
};

export default Example;
