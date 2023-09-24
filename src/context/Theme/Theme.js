import React, { createContext, useState } from "react";

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const defaultValue = {
  theme: LIGHT_THEME,
  toggleTheme: () => void 0
}

export const Theme = createContext(defaultValue);

const ThemeProvider = (props) => {
  const {
    children
  } = props;

  const [ theme, setTheme ] = useState(LIGHT_THEME);

  const toggleTheme = () => {
    theme === LIGHT_THEME ? setTheme(DARK_THEME) : setTheme(LIGHT_THEME);
  }

  return (
    <Theme.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </Theme.Provider>
  )
}

export default ThemeProvider;
