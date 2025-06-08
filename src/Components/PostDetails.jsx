import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { Bounce } from "react-awesome-reveal";

const PostDetails = () => {
  const post = useLoaderData();
  const { user } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(post.like || 0);

  const handleLike = () => {
    if (user && user.email !== post.email) {
      const newLikeCount = likeCount + 1;
      setLikeCount(newLikeCount);

      fetch(`https://coffe-server-bay.vercel.app/posts/${post._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ like: newLikeCount }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Like Added !!!",
              showConfirmButton: false,
              timer: 800,
            });
          }
        })
        .catch((error) => console.error("Error updating like count:", error));
    }
  };

  return (
    <Bounce triggerOnce>
      <div className="p-8 md:p-16 bg-gradient-to-br from-pink-50 to-white min-h-screen animate-fade-in">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-pink-300">
          <div className="p-8">
            <p className="text-xl text-gray-700 font-semibold">
              {likeCount} people interested in
            </p>
          </div>
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
              <span className="font-semibold text-orange-600">
                Availability:
              </span>{" "}
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

            <button
              onClick={handleLike}
              disabled={user && user.email === post.email}
              className={`mt-4 inline-block px-6 py-2 text-lg font-semibold rounded-lg shadow-md text-white transition-all ${
                user && user.email === post.email
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Like
            </button>
            {likeCount > 0 && (
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-red-500">
                  Contact Info:
                </span>{" "}
                {post.contact}
              </p>
            )}
          </div>
        </div>
      </div>
    </Bounce>
  );
};

export default PostDetails;
