import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "../assets/css/CardCarousel.css";
// import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// import { Pagination } from "swiper/modules";

import cimg from "../assets/images/goaCard.jpg";

const cardData = [
  {
    title: "4 Nights 3 Days Trip to Indonesia",
    image: require("../assets/images/indonesia.jpg"),
    alt: "img1",
  },
  {
    title: "4 Nights 3 Days Trip to Goa",
    image: require("../assets/images/goaCard.jpg"),
    alt: "img1",
  },
  {
    title: "4 Nights 3 Days Trip to Malaysia",
    image: require("../assets/images/malaysiaCard.jpg"),
    alt: "img1",
  },
];

const CardCarousel = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {cardData.map((cards, index) => (
          <SwiperSlide>
            <div>
              <h1 className="heading">{cards.title}</h1>
            </div>
            <div className="star-container">
              <FontAwesomeIcon
                icon={faStar}
                style={{ height: "20px", color: "#FFB932" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ height: "20px", color: "#FFB932" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ height: "20px", color: "#FFB932" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ height: "20px", color: "#FFB932" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ height: "20px", color: "#FFFF" }}
              />
            </div>

            <img src={cards.image} alt={cards.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
