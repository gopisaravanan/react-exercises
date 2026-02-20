import React, { useContext } from 'react';
import './style.css';
import { ThemeContext } from './ThemeContext';

export default function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div>
      <h3>Demo</h3>
      <h2>{theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
