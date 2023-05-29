import { useTheme } from "../context/ThemeContext"

// ここは、stateだけを利用するコンポーネント。
const Main = () => {
  const theme = useTheme();

  // console.log('main')

  return (
    <main className={`content-${theme}`}>
      <h1>テーマの切り替え</h1>
    </main>
  );
};

export default Main;
