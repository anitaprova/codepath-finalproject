import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import "./View.css";

const View = (props) => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState([]);
  const [likes, setLikes] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from("Game").select();
      setPosts(data);
    };
    if (posts.length === 0) fetchPosts();

    if (posts) {
      const post = posts.find((post) => post.id === parseInt(id));
      setCurrentPost(post);
    }
  }, [currentPost, id, posts]);

  useEffect(() => {
    if (posts && currentPost)
      setLikes(currentPost.likes);
  }, [currentPost, posts])
  // console.log(posts);

  const updateLikes = async () => {
    await supabase
      .from("Game")
      .update({
        likes: currentPost.likes+1,
      })
      .eq("id", currentPost.id);

      setLikes(likes + 1);
  };

  return (
    <div className="info-container">
      {posts && currentPost && (
        <div className="info">
          <p className="name">{currentPost.name}</p>
          <h1 className="title">{currentPost.title}</h1>
          <p className="game">Game: {currentPost.game}</p>
          <p className="description">{currentPost.description}</p>
          <button className="likes" onClick={() => updateLikes()}>
            <i className="fa fa-thumbs-o-up"></i> Upvote: {likes}
          </button>
        </div>
      )}
    </div>
  );
};

export default View;
