import React from "react";
import Heading from "./Heading";
import Socialmedia from "./Socialmedia";
import "./styles/Side.css";
import Slider from "react-slick";
import sideBanner from "../assets/sidebar-banner-new.jpg";
import Tpost from "./Tpost";
import { gallery } from "../dummyData";

const Side = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const category = [
    "world",
    "travel",
    "sport",
    "fun",
    "health",
    "fashion",
    "business",
    "technology",
  ];
  return (
    <>
      <Heading title="Stay Connected" />
      <Socialmedia />
      <Heading title="Subscribe" />
      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form action="">
          <input type="text" placeholder="Email Address..." />
          <button>
            <i className="fa fa-paper-plane"></i> Submit
          </button>
        </form>
      </section>
      <section className="banner">
        <img src={sideBanner} alt="" />
      </section>
      <Tpost />
      <section className="categorys">
        <Heading title="Categorys" />
        {category.map((val) => {
          return (
            <div className="category category1">
              <span>{val}</span>
            </div>
          );
        })}
      </section>
      <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Side;
