import { useState, useEffect } from "react";
import { getPosts } from "../servicios";

import React from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadData = () => loadPosts();
    loadData();
  }, []);
  const loadPosts = async (e) => {
    try {
      const posts = await getPosts();

      setPosts(posts);
    } catch (error) {
      console.error("error", e);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p className="titulo">{post.title}</p>{" "}
          <p className="subtitulo">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
