import React, { createContext, useContext, useState } from 'react';
import { setTheme, getTheme } from 'utils/store';

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ContextProps {
    children:any
}

export const ThemeProvider: React.FC<ContextProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getTheme() || false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    setTheme(darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};