import { useTheme } from "../context/ThemeContext"

const Main = () => {
  // 以下で、useContextを使用
  const [theme] = useTheme();

  return (
    <main className={`content-${theme}`}>
      <h1>テーマの切り替え</h1>
    </main>
  );
};

export default Main;
