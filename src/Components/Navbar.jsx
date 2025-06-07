import React, { use } from "react";
import { Link, NavLink } from "react-router";
import useTheme from "../Hooks/useTheme";
import "./Navbar.css";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import DarkModeToggler from "./DarkModeToggler";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const { theme, toggleTheme } = useTheme();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast("You have successfully logged out  !!!");
      })
      .catch(() => {
        console.log("This is an error");
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">LogIn</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/allposts">All Posts</NavLink>
      </li>

      {user && (
        <>
          <li>
            {" "}
            <NavLink to="/myposts">My Posts</NavLink>
          </li>
          <li>
            <NavLink to="/addPost">Add Post</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className=" dark:bg-gray-600 dark:text-white">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start ml-6">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex">
            <img
              className="w-[35px]"
              src="https://i.ibb.co/60ZLMXjh/logo.png"
              alt="logo"
            />
            <a className="btn btn-ghost text-2xl">RoomMate Finder</a>
          </div>
          <div>
            <DarkModeToggler></DarkModeToggler>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="avatar">
                <div
                  className="ring-primary mr-4 ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2"
                  title={
                    user.displayName === null ? "No Name" : user.displayName
                  }
                >
                  <img
                    src={
                      user.photoURL === null
                        ? "https://i.ibb.co.com/W4sVBFSb/download-5.jpg"
                        : user.photoURL
                    }
                  />
                </div>
              </div>
              <span className="text-blue-600 mx-6 text-[20px] font-bold">
                {user.displayName}
              </span>
              <button className="btn btn-primary text-white mr-4">
                <Link to="/register">Register</Link>
              </button>
              <button className="btn btn-primary text-white">
                <a onClick={handleSignOut} className="btn text-white">
                  LogOut
                </a>
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-primary text-white mr-4">
                <Link to="/register">Register</Link>
              </button>
              <button className="btn btn-primary text-white">
                <Link to="/login">LogIn</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
