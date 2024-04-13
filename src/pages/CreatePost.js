import React from "react";
import { useState } from "react";
import { supabase } from "../client";
import "./CreatePost.css";

const CreatePost = () => {
  const [post, setPost] = useState({
    name: "",
    description: "",
    title: "",
    game: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (
      name === "name" ||
      name === "description" ||
      name === "title" ||
      name === "game"
    ) {
      setPost((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const createPost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Game")
      .insert({
        name: post.name,
        title: post.title,
        description: post.description,
        game: post.game,
      })
      .select();

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
        <textarea
          id="description"
          name="description"
          rows="5"
          onChange={handleChange}
        ></textarea>{" "}
        <br />
        <br />
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;
