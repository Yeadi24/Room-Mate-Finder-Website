import React from "react";
import { useDarkMode } from "../Contexts/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <button onClick={toggleTheme} className="btn btn-dash btn-accent">
      {darkMode ? "Light ☀️" : "Dark 🌙"}
    </button>
  );
};

export default DarkModeToggler;
