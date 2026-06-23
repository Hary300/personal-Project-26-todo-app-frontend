import { useState, type ReactNode } from 'react';
import { DarkContext } from './DarkContext';

type DarkProviderProps = {
  children: ReactNode;
};

export const DarkProvider = ({ children }: DarkProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const setLightMode = () => {
    setIsDark(false);
  };

  const setDarkMode = () => {
    setIsDark(true);
  };

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <DarkContext.Provider
      value={{ isDark, setLightMode, setDarkMode, toggleDark }}
    >
      {children}
    </DarkContext.Provider>
  );
};
