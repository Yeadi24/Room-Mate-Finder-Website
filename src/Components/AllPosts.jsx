import React from "react";
import { useLoaderData } from "react-router";
import Card from "./Card";

const AllPosts = () => {
  const posts = useLoaderData();

  return (
    <div className="py-10 px-6">
      <h1 className="text-5xl font-bold text-center mb-12 text-pink-700">
        All Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
