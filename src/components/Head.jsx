import React from "react";
import Logo from "../assets/logo.png";
import SubLogo from "../assets/headerb.png";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="ad">
            <img src={SubLogo} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
