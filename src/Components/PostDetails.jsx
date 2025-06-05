import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();

  return (
    <div className="p-8 md:p-16 bg-gradient-to-br from-pink-50 to-white min-h-screen animate-fade-in">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-pink-300">
        <img
          src={post.url}
          alt={post.title}
          className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="p-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600">
            {post.title}
          </h1>
          <p className="text-xl text-gray-800">
            <span className="font-bold text-indigo-600">Posted By:</span>{" "}
            {post.name}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-blue-600">Location:</span>{" "}
            {post.location}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-green-600">Rent:</span> $
            {post.rent}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-purple-600">Room Type:</span>{" "}
            {post.type}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-orange-600">Availability:</span>{" "}
            {post.availability}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-pink-500">
              Lifestyle Preferences:
            </span>{" "}
            {post.lifestyle}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-gray-600">Description:</span>{" "}
            {post.description}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-red-500">Contact Info:</span>{" "}
            {post.contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
