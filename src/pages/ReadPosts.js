import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const ReadPosts = ({ props, searchQuery }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from("Game").select();

      setPosts(data);
      console.log("posts", data);
    };
    fetchPosts();
  }, [props]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const mostPopularPosts = () => {
    const sortedPosts = [...filteredPosts].sort((a, b) => b.likes - a.likes);
    setPosts(sortedPosts);
  };

  const newestPosts = () => {
    const sortedPosts = [...filteredPosts].sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return dateB - dateA;
    });
    setPosts(sortedPosts);
  };
  
  return (
    <div>
      <p>
        Order By: <button onClick={newestPosts}>Newest</button>{" "}
        <button onClick={mostPopularPosts}>Most popular</button>
      </p>
      <div className="ReadPosts">
        {filteredPosts && filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <Card
              key={index}
              id={post.id}
              name={post.name}
              title={post.title}
              description={post.description}
              game={post.game}
              likes={post.likes}
            />
          ))
        ) : (
          <div>
            <h2>Your Gallery</h2>
            <p>You haven't a post yet</p>
            <Link to="/new">
              <button className="headerBtn"> Create a Post </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadPosts;
