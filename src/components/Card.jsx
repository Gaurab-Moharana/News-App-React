import React from "react";

const Card = ({ item: { id, cover, catgeory, title, authorName, time } }) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="text">
          <span className="category">{catgeory}</span>

          <h1 className="titleBG">{title}</h1>

          <div className="author flex">
            <span>by {authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
