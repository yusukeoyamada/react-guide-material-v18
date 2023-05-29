import { useState, useContext, createContext } from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // 以下にて、stateに更新があった場合、
  // 更新用関数だけを使うviewコンポーネントも再レンダリングされてしまうので、
  // それを避けるために、stateを使うproviderと、更新用関数を使うproviderを分けて管理することで、
  // 上記再レンダリング問題を避けている。
    // パフォーマンスが気になってきた場合は、上記解決策を講じても。
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={setTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const useUpdateTheme = () => useContext(ThemeUpdateContext);
