'use client';

import { useState, useTransition } from 'react';
import { Moon, Sun } from 'lucide-react';
import { updateDarkModeAction } from '@/app/actions/user';

interface DarkModeToggleProps {
  initialDarkMode: boolean;
}

export default function DarkModeToggle({ initialDarkMode }: DarkModeToggleProps) {
  const [darkMode, setDarkMode] = useState(initialDarkMode);
  const [pending, startTransition] = useTransition();

  function toggle() {
    const newMode = !darkMode;
    setDarkMode(newMode);

    // Apply immediately to the DOM
    const html = document.documentElement;
    if (newMode) {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
    }

    // Persist to DB
    startTransition(async () => {
      await updateDarkModeAction(newMode);
    });
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-xl ${darkMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-amber-500/20 text-amber-500'}`}>
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        </div>
        <div>
          <p className="font-medium text-sm">{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
          <p className="text-xs text-[var(--muted)]">
            {darkMode ? 'Easy on the eyes at night' : 'Bright and clear in daylight'}
          </p>
        </div>
      </div>

      {/* Toggle switch */}
      <button
        id="dark-mode-toggle"
        onClick={toggle}
        disabled={pending}
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-300 focus:outline-none disabled:opacity-60 ${
          darkMode ? 'bg-indigo-500' : 'bg-[var(--surface-hover)]'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
            darkMode ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}
