import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from "date-fns";

const Card = (props) =>  {
  console.log(props);
  return (
    <div className="Card">
      <Link
        to={"view/" + props.id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Link to={"edit/" + props.id}>
          <img className="moreButton" alt="edit button" src={more} />
        </Link>

        <p className="time">
          Posted {formatDistanceToNow(new Date(props.time))} ago
        </p>
        <h2 className="title">{props.title}</h2>
        <p className="nauthorame">by: {props.name}</p>
        <p className="game">Game: {props.game}</p>
        <p className="likes">
          <i className="fa fa-thumbs-o-up" style={{ color: "#FFAFCC" }}></i>{" "}
          Likes: {props.likes}
        </p>
      </Link>
    </div>
  );
};

export default Card;