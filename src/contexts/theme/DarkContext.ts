import { createContext } from 'react';

type DarkContextType = {
  isDark: boolean;
  setLightMode: () => void;
  setDarkMode: () => void;
  toggleDark: () => void;
};

export const DarkContext = createContext<DarkContextType | null>(null);
