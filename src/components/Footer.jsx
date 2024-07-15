import React from "react";
import "./styles/Footer.css";
import techLogoFooter from "../assets/tech-logo-footer.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src={techLogoFooter} alt="" />
            <p>
              Busan is an amazing magazine Blogger theme that is easy to
              customize for your needs
            </p>
            <i className="fa fa-envelope"></i>
            <span>hello@beautiful.com</span>
            <br />
            <i className="fa fa-headphones"></i>
            <span>+91 60521488</span>
          </div>
          <div className="box">
            <h3>SPORT</h3>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero2.jpg" alt="" />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className="box">
            <h3>CRICKET</h3>
            <div className="item">
              <img src="../images/hero/hero3.jpg" alt="" />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero4.jpg" alt="" />
              <p>Renewable energy dead as industry waits for policy</p>
            </div>
          </div>
          <div className="box">
            <h3>LABLES</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <div className="container flexSB">
          <p> © all rights reserved</p>
          <p>
            made with <i className="fa fa-heart"></i> by gaurab
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
