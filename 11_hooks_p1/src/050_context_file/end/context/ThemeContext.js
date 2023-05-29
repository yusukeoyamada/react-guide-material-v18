// state管理をviewコンポーネントとは別ファイルで管理
import { useState, useContext, createContext } from "react";

// 以下は、Example.jsで記述されていたもの
export const ThemeContext = createContext();

// 以下は、Example.jsで記述されていたもの
export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState("light");
  
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {/* 以下には、<Header />や、<Main />が入る */}
      {children}
    </ThemeContext.Provider>
  );
};

// 以下は、Example.jsの子コンポーネントである、Header.jsやMain.jsで記述されていたもの
export const useTheme = () => useContext(ThemeContext);