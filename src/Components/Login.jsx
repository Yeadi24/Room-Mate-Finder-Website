import React, { use, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../public/firebase.init";

const Login = () => {
  document.title = "LogIn";
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState([""]);
  const emailRef = useRef();
  const { signInUser, user, GoogleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    setError("");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("A password reset email has been sent");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then(() => {
        toast.success("Google Sign-In Successful!");
        navigate("/");
      })
      .catch(() => {
        toast.error(error);
      });
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpperCase) {
      toast.warning("Password must contain at least one uppercase letter");
      return;
    }
    if (!hasLowerCase) {
      toast.warning("Password must contain at least one lowercase letter");
      return;
    }
    if (!isLongEnough) {
      toast.warning("Password must be at least 6 characters long");
      return;
    }

    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("You have successfully logged in");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Login failed! ");
        console.log(error);
      });
  };
  return (
    <>
      {user ? (
        <>
          <h1 className="text-[60px] font-bold text-center mt-40">
            You are already logged in !!!
          </h1>
        </>
      ) : (
        <>
          <div className="card bg-base-300 p-8 mx-auto m-10 max-w-sm shrink-0 mt-14 mb-12 shadow-2xl">
            <h1 className="text-2xl font-bold mx-auto">Login now!</h1>
            <div className="card-body">
              <form onSubmit={handleLogIn} >
                <label className="label">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div onClick={handleForgetPassword}>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4 ml-24">Login</button>
              </form>
              <button
                onClick={handleGoogleSignIn}
                className="btn google flex justify-around items-center bg-green-300 p-2 rounded-xl my-2 border-2 border-black"
              >
                <FaGoogle size={25} />
                <span className="text-[16px] font-semibold">
                  LogIn with Google
                </span>
              </button>
              <p>
                New to the website? Please{" "}
                <Link className="text-blue-700" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
