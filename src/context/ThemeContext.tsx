import React, { useContext, useState } from "react";
const ThemeContext = React.createContext({} as any);
const ThemeContextUpdate = React.createContext({} as any);

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeContextUpdate);
}
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <ThemeContextUpdate.Provider value={toggleTheme}>
          {children}
        </ThemeContextUpdate.Provider>
      </ThemeContext.Provider>
    </>
  );
}
