import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  function toggleTheme() {
    const newValue = !isDark;
    setIsDark(newValue);

    if (newValue) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full
        bg-[#0a1128]/5 dark:bg-white/5
        border border-[#0a1128]/10 dark:border-white/10
        hover:scale-105 transition-all"
    >
      {isDark ? (
        <Sun size={18} className="text-[#e9c46a]" />
      ) : (
        <Moon size={18} className="text-[#1b998b]" />
      )}
    </button>
  );
}