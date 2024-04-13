import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import "./View.css";

const View = (props) => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from("Game").select();
      setPosts(data);
    };
    fetchPosts();

    console.log(posts);
    if (posts) {
      const post = posts.find((post) => post.id === parseInt(id));
      setCurrentPost(post);
    }
  }, [id, posts]);

  // console.log("posts", posts);

  return (
    <div className="info-container">
      {posts && currentPost && (
        <div className="info">
          <h1>{currentPost.title}</h1>
          <p>{currentPost.name}</p>
          <p>{currentPost.game}</p>
          <p>{currentPost.description}</p>
        </div>
      )}
    </div>
  );
};

export default View;
