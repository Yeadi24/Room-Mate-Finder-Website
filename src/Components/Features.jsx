import React from "react";

const Features = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-pink-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-12">
          Our Features
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Discover the tools and services we provide to make your roommate
          search seamless, secure, and stress-free!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-t-4 border-pink-500">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Easy Post Creation
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Create detailed posts about your space with ease, including
              photos, rent, and lifestyle preferences.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-500">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Connect with Matches
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Find compatible roommates based on location, budget, and lifestyle
              preferences quickly.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-t-4 border-green-500">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Secure Interactions
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Engage with potential roommates securely, with contact info
              revealed only after liking a post.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-t-4 border-purple-500">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m6 4v2m0-2a2 2 0 100-4m0 4a2 2 0 110-4m6 4a2 2 0 100-4m0 4a2 2 0 110-4"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Manage Your Posts
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Easily update or delete your posts to keep your listings current
              and relevant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
