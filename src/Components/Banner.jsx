import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Fade cascade damping={0.4} delay={200} duration={600} triggerOnce>
      <div className="mt-10 mx-auto w-[1200px] rounded-3xl bg-gradient-to-br from-pink-100 via-pink-200 to-pink-50 py-12 px-4 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className=" space-y-6 text-center md:text-left animate-fade-in">
          <h1 className="text-3xl font-extrabold text-pink-700 leading-snug">
            Find Your{" "}
            <span className="text-indigo-600">
              <Typewriter
                words={[
                  "Perfect Roommate",
                  "Ideal Space Partner",
                  "Next Home Mate",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-gray-700 text-lg">
            Discover the easiest way to connect with potential roommates. Share
            your space and find someone who fits your vibe, lifestyle, and
            budget.
          </p>
          <Link to="/allposts">
            <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-lg font-medium rounded-md shadow-md transition duration-300 transform hover:scale-105">
              Explore Now
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/2 animate-fade-in">
          <img
            src="https://i.ibb.co/TDK0Y7ZT/Hero.jpg"
            alt="Roommate Search"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </Fade>
  );
};

export default Banner;
