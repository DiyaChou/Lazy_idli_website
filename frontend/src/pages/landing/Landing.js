import React, { useEffect, useRef, useState } from "react";
import Hero from "../../components/hero/Hero";
import NavBar from "../../components/navbar/NavBar";
import Services from "../../components/servicesFrame/Services";
import "./landing.css";

function Landing({
  reference,
  hidefixedFrame,
  fixedFrameHideFun,
  activePanelSet,
}) {
  const [isPosFixed, setIsPosFixed] = useState(false);
  const conRef = useRef();

  useEffect(() => {
    //hide the fixed frame when clicked on any service on the second page
    if (hidefixedFrame) {
      conRef.current.style.transform = "scale(0)";
    } else {
      conRef.current.style.transform = "scale(1)";
    }

    //scroll event listener
    reference.current.addEventListener("scroll", function () {
      //when scrolled down from second page the active panel is closed
      if (reference.current.scrollTop > window.innerHeight + 140 + 300) {
        activePanelSet(0);
        fixedFrameHideFun(false);
      }
      if (
        reference.current.scrollTop >=
        document.getElementById("stickyContainer").offsetTop
      ) {
        setIsPosFixed(true); //set the position of the service panel fix to the top from bottom when the first page is scrolled down
      } else {
        activePanelSet(0); //reset the second page to normal when the page is scrolled up to first page
        setIsPosFixed(false); //unset the fixed panel back to the bottom when scrolled up
        fixedFrameHideFun(false); //unhide the fixed frame when scrolled back up to first page(when clicked on any portfolio item the fixed frame gets hidden)
      }
    });
  }, [reference, fixedFrameHideFun, activePanelSet, hidefixedFrame]);

  return (
    <div className="container">
      <NavBar />
      <Hero />
      <div
        id="stickyContainer"
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          backgroundColor: "transparent",
        }}
      >
        <div
          id="stickyClone"
          style={
            isPosFixed
              ? {
                  position: "fixed",
                  top: 0,
                  zIndex: 5,
                  width: "100%",
                  right: "12px",
                  transition: "1s",
                }
              : { display: "block" }
          }
          ref={conRef}
        >
          <Services reference={reference} isSticky={true} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
