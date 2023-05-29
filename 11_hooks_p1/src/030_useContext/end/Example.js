// POINT useContextの基礎
import { createContext } from "react";
import Child from "./components/Child";

// アプリケーション全体で、stateを管理したい際に、useContextが使われる。
  // propsのバケツリレーの代替
    // "hello"は、propsを通さずに渡したい値を設定
    // exportする
export const MyContext = createContext("hello");

const Example = () => {
  return <Child />;
};

export default Example;
