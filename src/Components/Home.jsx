import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router";
import Card from "./Card";
import "./styles.css";
import Banner from "./Banner";
import Slider from "./Slider";
import Extra from "./Extra";
import Features from "./Features";
import {
  createContext,
  useContext,
  useEffect,
  useState as useStateTheme,
} from "react";
import { Bounce } from "react-awesome-reveal";

const ThemeContext = createContext("light");

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useStateTheme(
    localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useDarkMode = () => useContext(ThemeContext);

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const toggleTheme = () => setDarkMode(!darkMode);
  return (
    <button
      onClick={toggleTheme}
      className="btn btn-dash btn-accent bg-gray-200 dark:bg-white/10 text-black dark:text-white px-4 py-2 rounded-md cursor-pointer"
    >
      {darkMode ? "Light ☀️" : "Dark 🌙"}
    </button>
  );
};

const Home = () => {
  document.title = "RoomMate Finder";
  const initialPosts = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);

  const availablePosts = posts
    .filter((post) => post.availability === "available")
    .slice(0, 6);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="flex justify-end p-4">
          <DarkModeToggler />
        </div>
        <Banner />
        <Slider />
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-[55px] dark:text-white font-bold">
            Best Available Rooms
          </h1>
          <Bounce triggerOnce duration={1500} delay={800}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto max-w-7xl py-12">
              {availablePosts.map((post) => (
                <Card
                  key={post._id}
                  setCoffees={setPosts}
                  posts={posts}
                  post={post}
                />
              ))}
            </div>
          </Bounce>
        </div>
        <Extra />
        <Features />
      </div>
    </ThemeProvider>
  );
};

export default Home;
