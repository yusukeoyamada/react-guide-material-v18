// 以下は、スタティックインポートと言う。
// import { add } from "./add";

// POINT ダイナミックインポートとは
const Example = () => {
  const dynamicImport = async () => {
    // 以下が、ダイナミックインポート(jsの機能)
      // スタティックインポートと違って、時々で「import()」を使って、必要になった時に呼び出すことができる。
        // 「import("./add")」と引数にディレクトリを指定することで、Promiseが返ってくる。
        // その為、「import("./add").then(module => {})」としても良い。
          // 「export default」で指定した場合には、module内のdefaultに格納されている。
          // 「export」だけで指定した場合には、module内に指定した関数(例: add)がそのままの名前で格納されている。
    const module = await import("./add");
    // console.log(module);
  }
  dynamicImport();
  // console.log(add(1,2))
};

export default Example;
