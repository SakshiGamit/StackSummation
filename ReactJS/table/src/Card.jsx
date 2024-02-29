import React from "react";
import "./index.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <img className="card-img-top"  src={props.imgsrc} alt={props.alt} />
        <div className="card-body">
          <span className="card-text">{props.title} </span>
          <h3 className="card-title">{props.sname}</h3>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-danger">Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
