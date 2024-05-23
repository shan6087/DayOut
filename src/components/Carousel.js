import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import "../assets/css/Carousel.css";
import bimg from "../assets/images/bimg.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CardCarousel from "../components/CardCarousel";
import NavComponent from "./NavComponent";

const Carousel = () => {
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "centre",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const buttonStyle = {
    width: "18px",
    height: "18px",
    marginTop: "400px",
    left: "62px",
    gap: "0px",
    opacity: "0.3px",
  };

  return (
    <Fullpage>
      <FullpageNavigation style={{ ...buttonStyle }} />
      <FullPageSections>
        <FullpageSection
          style={{ ...SectionStyle, backgroundImage: `url(${bimg})` }}
        >
          {" "}
          <div className="title-container">
            <div className="title-text">
              <h1>INDONESIA</h1>
            </div>
            <div className="title-description">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nunc, tortor mauris eget ut integer sit. Purus consequat urna
                vulputate turpis blandit sed.{" "}
              </h3>
            </div>
            <div>
              <button className="title-button">
                Explore &nbsp;
                <FontAwesomeIcon icon={faArrowRight} beatFade />
              </button>
            </div>
            <CardCarousel />
            <NavComponent />
          </div>
        </FullpageSection>
        <FullpageSection
          style={{ ...SectionStyle, backgroundImage: `url(${bimg})` }}
        >
          <div className="title-container">
            <div className="title-text">
              <h1>INDONESIA</h1>
            </div>
            <div className="title-description">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nunc, tortor mauris eget ut integer sit. Purus consequat urna
                vulputate turpis blandit sed.{" "}
              </h3>
            </div>
            <div>
              <button className="title-button">
                Explore &nbsp;
                <FontAwesomeIcon icon={faArrowRight} beatFade />
              </button>
            </div>
            <CardCarousel />
            <NavComponent />
          </div>
        </FullpageSection>
        <FullpageSection
          style={{ ...SectionStyle, backgroundImage: `url(${bimg})` }}
        >
          <div className="title-container">
            <div className="title-text">
              <h1>INDONESIA</h1>
            </div>
            <div className="title-description">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nunc, tortor mauris eget ut integer sit. Purus consequat urna
                vulputate turpis blandit sed.{" "}
              </h3>
            </div>
            <div>
              <button className="title-button">
                Explore &nbsp;
                <FontAwesomeIcon icon={faArrowRight} beatFade />
              </button>
            </div>
            <CardCarousel />
            <NavComponent />
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default Carousel;
