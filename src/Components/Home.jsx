import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router";

import Card from "./Card";
import "./styles.css";

const Home = () => {
  document.title = "RoomMate Finder";
  const initialPosts = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-12">
        {posts.map((post) => (
          <Card
            key={post._id}
            setCoffees={setPosts}
            posts={posts}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
