import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import "../assets/css/Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CardCarousel from "../components/CardCarousel";
import NavComponent from "./NavComponent";

// datas

const pageData = [
  {
    title: "INDONESIA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc, tortor mauris eget ut integer sit. Purus consequat urna vulputate turpis blandit sed.",
    backgroundImage: require("../assets/images/bimg.jpeg"),
  },
  {
    title: "GOA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc, tortor mauris eget ut integer sit. Purus consequat urna vulputate turpis blandit sed.",
    backgroundImage: require("../assets/images/goa.jpg"),
  },
  {
    title: "MALAYSIA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc, tortor mauris eget ut integer sit. Purus consequat urna vulputate turpis blandit sed.",
    backgroundImage: require("../assets/images/malaysia.jpeg"),
  },
];

const Carousel = () => {
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",

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
      <FullpageNavigation style={{ ...buttonStyle }}></FullpageNavigation>

      <FullPageSections>
        {pageData.map((page, index) => (
          <FullpageSection
            key={index}
            style={{
              ...SectionStyle,
              backgroundImage: `url(${page.backgroundImage})`,
            }}
          >
            <div className="title-container">
              <div className="title-text">
                <h1>{page.title}</h1>
              </div>
              <div className="title-description">
                <h3>{page.description}</h3>
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
        ))}
      </FullPageSections>
    </Fullpage>
  );
};

export default Carousel;
