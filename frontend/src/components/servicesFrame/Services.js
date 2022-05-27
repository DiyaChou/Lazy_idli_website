import React, { useEffect, useState } from "react";
import BrandingSvg from "../../assets/images/branding.svg";
import DesignSvg from "../../assets/images/design.svg";
import UX_UI_Svg from "../../assets/images/ux_ui.svg";
import MotionSvg from "../../assets/images/motion.svg";
import DevelopmentSvg from "../../assets/images/development.svg";
import "./services.css";

const services = [
  {
    id: 1,
    number: 1,
    image: BrandingSvg,
    title: "Branding",
  },
  {
    id: 2,
    number: 2,
    image: UX_UI_Svg,
    title: "UI/UX Design",
  },
  {
    id: 3,
    number: 3,
    image: DesignSvg,
    title: "Industrial Design",
  },
  {
    id: 4,
    number: 4,
    image: MotionSvg,
    title: "NFT",
  },
  {
    id: 5,
    number: 5,
    image: DevelopmentSvg,
    title: "Development",
  },
];

function Services(props) {
  const [scrollPos, setScrollPos] = useState(0);
  const transitionStyle = {
    //style to number when the page is scrolled up
    numberStyle:
      scrollPos < window.innerHeight
        ? { translate: "scale(1)", marginRight: "0px" }
        : {
            transform: "scale(1)",
            marginRight: document.getElementById("panelTitle").offsetLeft * 0.3,
            // marginRight: document.getElementById("panelTitle").offsetLeft - 28,
          },

    //style for the text in the fixed frame (reduce the opacity when scrolled down)
    textStyle:
      (100 - scrollPos) / 100 <= 0
        ? { display: "none" }
        : { display: "block", opacity: (100 - scrollPos) / 100 },
  };

  //function to track the scroll position
  function trackScroll() {
    setScrollPos(props.reference.current.scrollTop);
  }

  useEffect(() => {
    //add scroll event listener
    props.reference.current.addEventListener("scroll", trackScroll);
  }, []);

  return (
    <div className="servicesFrame">
      {services.map((data) => {
        return (
          <div className="item" key={data.id}>
            <div className="itemNumber" style={transitionStyle.numberStyle}>
              {data.number}
            </div>

            <div className="itemImgTitle">
              <img
                className="itemImg"
                id={"number" + data.number}
                src={data.image}
                alt={data.title}
              />
              <div className="itemTitle" style={transitionStyle.textStyle}>
                {data.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
