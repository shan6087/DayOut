import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/css/CardCarousel.css";
// import Card from "react-bootstrap/Card";
import cimg from "../assets/images/cimg.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import c2img from "../assets/images/c2img.jpeg";
import bimg from "../assets/images/bimg.jpeg";

const CardCarousel = () => {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div className="card-title">4 Nights 3 Days Trip to Indonesia</div>
          <div className="card-star">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFFFFF" }} />
          </div>
          <div className="card-image">
            <img src={cimg} alt="img1"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-title">4 Nights 3 Days Trip to Indonesia</div>
          <div className="card-star">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFFFFF" }} />
          </div>
          <div className="card-image">
            <img src={c2img} alt="img1"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card-title">4 Nights 3 Days Trip to Indonesia</div>
          <div className="card-star">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFFFFF" }} />
          </div>
          <div className="card-image">
            <img style={{ borderRadius: "20px" }} src={bimg} alt="img1"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CardCarousel;
