import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import "./EditPost.css";

const EditPost = ({ data }) => {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: null,
    name: "",
    speed: "",
    color: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (
      name === "name" ||
      name === "title" ||
      name === "description" ||
      name === "game"
    ) {
      setPost((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Game")
      .update({
        name: post.name,
        title: post.title,
        description: post.description,
        game: post.game,
      })
      .eq("id", id);

    window.location = "/";
  };

  const deletePost = async (event) => {
    event.preventDefault();
    await supabase.from("Game").delete().eq("id", id);
    window.location = "/";
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} />{" "}
        <br />
        <br />
        <label htmlFor="title">Title of Post</label>
        <input type="text" id="title" name="title" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="game">Game</label> <br />
        <select id="game" name="game" onChange={handleChange}>
          <option value="">Select a game</option>
          <option value="Minecraft">Minecraft</option>
          <option value="Roblox">Roblox</option>
          <option value="Tetris">Tetris</option>
          <option value="Genshin Impact">Genshin Impact</option>
          <option value="Grand Theft Auto">Grand Theft Auto</option>
          <option value="Honkai Star Rail">Honkai Star Rail</option>
        </select>
        <br />
        <br />
        <label htmlFor="description">Description</label> <br />
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
        />{" "}
        <br />
        <input type="submit" value="Submit" onClick={updatePost} />
        <button className="deleteButton" onClick={deletePost}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditPost;
