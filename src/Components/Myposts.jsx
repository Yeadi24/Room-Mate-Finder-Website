import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";

const Myposts = () => {
  document.title = "My Posts";
  const { user } = use(AuthContext);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myposts?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/posts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setPosts(posts.filter((post) => post._id !== id));
              Swal.fire("Deleted!", "Your post has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">My Posts</h1>

      {posts.length === 0 ? (
        <div className="flex items-center justify-center h-60">
          <h2 className="text-5xl font-extrabold text-red-500 animate-pulse">
            No Post Found !!!
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={post.url}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-600">
                  <strong>Location:</strong> {post.location}
                </p>
                <p className="text-gray-600">
                  <strong>Rent:</strong> ${post.rent}
                </p>
                <p className="text-gray-600">
                  <strong>Room Type:</strong> {post.type}
                </p>
                <p className="text-gray-600">
                  <strong>Availability:</strong> {post.availability}
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Contact:</strong> {post.contact}
                </p>

                {/* Buttons */}
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => navigate(`/updatePost/${post._id}`)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myposts;
