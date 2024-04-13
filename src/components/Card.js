import React from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {
  return (
    <div className="Card">
      <Link
        to={"view/" + props.id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Link to={"edit/" + props.id}>
          <img className="moreButton" alt="edit button" src={more} />
        </Link>
        <h2 className="title">{props.title}</h2>
        <p className="name">by: {props.name}</p>
        <p className="name">Game: {props.game}</p>
        <p>
          <i className="fa fa-thumbs-o-up" style={{ color: "#FFAFCC" }}></i> Likes:{" "}
          {props.likes}
        </p>
      </Link>
    </div>
  );
};

export default Card;