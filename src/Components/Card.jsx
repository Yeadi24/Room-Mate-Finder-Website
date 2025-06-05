import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const Card = ({ post }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
      <img
        src={post.url}
        alt={post.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-6 space-y-3 flex justify-between items-start">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold text-pink-600">
            {post.title}
          </h2>
          <p className="text-lg text-gray-700">
            <strong className="text-indigo-600">Location:</strong>{" "}
            {post.location}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="text-green-600">Rent:</strong> ${post.rent}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="text-blue-600">Type:</strong> {post.type}
          </p>
          <div className="pt-4">
            <Link
              to={`/postDetails/${post._id}`}
              className="inline-block px-5 py-2 text-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-md hover:from-pink-600 hover:to-red-600 transition-all"
            >
              See More
            </Link>
          </div>
        </div>

        {/* Avatar and Name */}
        <div className="flex flex-col items-center ml-6">
          <div className="avatar avatar-online">
            <div className="w-20 rounded-full">
              <img src={user?.photoURL} alt="User Avatar" />
            </div>
          </div>
          <p className="mt-2 text-gray-700 font-medium text-center">
            {user?.displayName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
