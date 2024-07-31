// components/Header.js
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Salman Omar</h1>
        <nav>
          <a href="#about" className="mx-2">About</a>
          <a href="#skills" className="mx-2">Skills</a>
          <a href="#projects" className="mx-2">Projects</a>
          <a href="#contact" className="mx-2">Contact</a>
        </nav>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="ml-4 px-4 py-2 rounded bg-gray-800 text-white"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  );
}
 