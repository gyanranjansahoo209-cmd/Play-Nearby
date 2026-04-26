'use client';

import { useEffect } from 'react';

interface ThemeProviderProps {
  darkMode: boolean;
  children: React.ReactNode;
}

export default function ThemeProvider({ darkMode, children }: ThemeProviderProps) {
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return <>{children}</>;
}
