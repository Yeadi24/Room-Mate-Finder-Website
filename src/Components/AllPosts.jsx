import React from "react";
import { useLoaderData, Link } from "react-router";
import Card from "./Card";
import { Flip } from "react-awesome-reveal";

const AllPosts = () => {
  const posts = useLoaderData();
  document.title = "All Posts";

  return (
    <Flip direction="horizontal" triggerOnce>
      <div className="py-10 px-6 flex flex-col gap-8 m-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-pink-700">
          All Posts
        </h1>
        <div className="overflow-x-auto mb-12">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Rent</th>
                <th>Details</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={post.avatar} alt="User Avatar" />
                      </div>
                    </div>
                  </td>
                  <td>{post.name}</td>
                  <td>${post.rent}</td>
                  <td>
                    <Link
                      to={`/postDetails/${post._id}`}
                      className="btn btn-primary"
                    >
                      See More
                    </Link>
                  </td>
                  <td>
                    <button
                      className={`btn btn-xs text-white ${
                        post.availability === "available"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      {post.availability === "available"
                        ? "Available"
                        : "Unavailable"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Card key={post._id} post={post} />
          ))}
        </div>
      </div>
    </Flip>
  );
};

export default AllPosts;
