import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router";

import Card from "./Card";
import "./styles.css";
import Banner from "./Banner";
import Slider from "./Slider";
import Extra from "./Extra";

const Home = () => {
  document.title = "RoomMate Finder";
  const initialPosts = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);

  // Filter posts to show only 6 available ones
  const availablePosts = posts
    .filter((post) => post.availability === "available")
    .slice(0, 6);

  return (
    <>
      <Banner></Banner>
      <Slider></Slider>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto max-w-7xl py-12">
          {availablePosts.map((post) => (
            <Card
              key={post._id}
              setCoffees={setPosts}
              posts={posts}
              post={post}
            />
          ))}
        </div>
      </div>
      <Extra></Extra>
    </>
  );
};

export default Home;
