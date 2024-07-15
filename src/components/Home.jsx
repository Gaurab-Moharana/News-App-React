import React from "react";
import "./styles/Home.css";
import Popular from "./Popular";
import Ppost from "./Ppost";
import Life from "./Life";
import Music from "./Music";
import Side from "./Side";
const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <Popular />
            <Ppost />
            <Life />
            <Music />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
