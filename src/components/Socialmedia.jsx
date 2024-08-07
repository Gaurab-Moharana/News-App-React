import React from "react";

const Socialmedia = () => {
  return (
    <>
      <section className="social">
        <div className="socBox">
          <i className="fab fa-facebook-f"></i>
          <span>14,270 Likes</span>
        </div>
        <div className="socBox">
          <i className="fab fa-pinterest"></i>
          <span>5,785 Fans</span>
        </div>
        <div className="socBox">
          <i className="fab fa-twitter"></i>
          <span>8,289 Followers</span>
        </div>
        <div className="socBox">
          <i className="fab fa-instagram"></i>
          <span>22,456 Followers</span>
        </div>
        <div className="socBox">
          <i className="fab fa-youtube"></i>
          <span>4,900 Subscribers</span>
        </div>
      </section>
    </>
  );
};

export default Socialmedia;
