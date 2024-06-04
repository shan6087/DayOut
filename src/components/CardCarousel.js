import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/css/CardCarousel.css";
// import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";

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
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        modules={[Pagination, Autoplay]}
      >
        {" "}
        {cardData.map((cards, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-slide ${
              index === 0 && activeSlideIndex === 0 ? "active" : ""
            }`}
          >
            <div className="text-container">
              <h1>{cards.title}</h1>
            </div>
            <div className="star-container">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  style={{ color: i < 4 ? "#FFD43B" : "#FFFFFF" }}
                />
              ))}
            </div>
            <div className="image-container">
              <img src={cards.image} alt={cards.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
