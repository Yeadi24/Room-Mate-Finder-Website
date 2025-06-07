import React from "react";

const DarkModeToggler = () => {
  const darkMode = false;
  return (
    <button className="btn btn-dash btn-accent">
      {darkMode ? "Light ☀️" : "Dark 🌙"}
    </button>
  );
};

export default DarkModeToggler;
