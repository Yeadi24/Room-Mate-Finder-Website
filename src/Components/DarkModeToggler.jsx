import React from "react";
import { useDarkMode } from "../Contexts/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-dash btn-accent bg:gray-200 dark:bg-white/10 cursor-pointer"
    >
      {darkMode ? "Light ☀️" : "Dark 🌙"}
    </button>
  );
};

export default DarkModeToggler;
