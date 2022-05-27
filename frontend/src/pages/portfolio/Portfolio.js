import React, { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import Arrow from "../../assets/images/rArrow.svg";

const categories = [
  {
    id: 1,
    title: "Branding",
    description:
      "Branding is the process of giving a meaning to specific organization, company, products or services by creating and shaping a brand in consumers' minds. Your brand not only gives your buyers a way to remember you but also creates an identity for your business and sets you apart from competitors.",
    stages: [
      "Brand Strategy: Think of your brand strategy as your reason for being; why does your brand exist, and how are you going to impact people’s lives positively? Think about how you want people to view your business.",
      "Brand Identity: Your brand identity is how you take your brand strategy/messaging and convey it to the world. Think of elements like your logo, colors and fonts, content, advertising, website design, packaging, and more.",
      "Brand Marketing: The next step is brand marketing, which is how your business can bring awareness to their products or services.",
    ],
  },
  {
    id: 2,
    title: "UI/UX",
    description:
      "UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both elements are crucial to a product and work closely together.User experience design fully encompasses traditional human-computer interaction design, and extends it to address all aspects of a product or service as perceived by users.",
    stages: [
      "Research: The research is the most crucial element for a designer. The designing team studies how the present system works for the current client proposal. The Research process involves an understanding of the latest UI/UX trends, design principles, and guidelines.",
      "Analysis: In this phase, make use of the things collected in the Research phase. With the help of the information received, create hypothetical personas, and experience maps. Hypothetical Personas: Creating hypothetical scenarios help the designers to know about the various persons who will be the users of your product.",
      "Design: In the design process, we finally end up giving life to ideas that we have collected in the above three steps. It’s time to work on the final graphics now. The design team will execute the final design in this phase.",
    ],
  },
  {
    id: 3,
    title: "Industrial Design",
    description:
      "What means graphic design? Graphic design is the craft of planning and creating visual content to communicate ideas and messages. Graphic design is everywhere you look — from billboards to cereal boxes to mobile apps. Through incorporating different elements and principles, these designs can influence our perception and emotions.",
    stages: [
      "Analysis: At the start, it’s a matter of understanding the basics. We use various methods such as the Design Lab to create a clean design briefing. We work like journalists and question everything we see.",
      "Design: We express the insights and inspiration from the analysis phase both systematically and creatively in sketches and mood boards. Using 2D and 3D renderings, we create a visualization of the concepts as a basis for your decision. The selected design concept is systematically explored, constructed in a 3D CAD system and implemented with regard to the selected manufacturing technology.",
      "Implement: When engineering and prototype models are handed over, the product design process ends. We deliver the complete design definition including Class-A Surfaces, virtual images, animation and design model if desired, and provide support in implementing the series.",
    ],
  },
  {
    id: 4,
    title: "NFT",
    description:
      "An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.",
    stages: [
      "Uniqueness & Indivisibility: Each NFT token is a unique asset and it has a unique set of metadata. NFT cannot be divided into smaller denominations.",
      "Authenticity: Each NFT has an owner and this information is easily verifiable.",
      "Non-interoperability: One NFT is not equal to another NFT, you cannot simply exchange them, unlike Bitcoin or Ether, for example.",
    ],
  },
  {
    id: 5,
    title: "Software Development",
    description:
      "Web development gives us knowledge of different languages such as HTML, CSS, JavaScript, and also frameworks such as ReactJS, AngularJS, and server-side frameworks like NodeJS. In mobile app development, you can learn about developing an iOS app as well as developing an android app.",
    stages: [
      "Planning & Analysis: Planning is a crucial step to begin it. If the plan is charted out half the battle is won. Without a plan in hand, we cannot possibly foresee the stability and the vulnerability of the project. Planning is the beginning of the project and its flawlessness affects its progress.",
      "Design, Development & implementation: After analysis designing takes over. It is basically building the architectural structure of the project. These steps ensure that any flaws and defects are removed.",
      "Testing & maintainance: The testing stage makes an assessment of the software product and checks for any errors and bugs. Once the product clears the testing stage and is found without any issues, it is passed on to the maintenance process. Here the product is constantly upgraded from time to time to adapt to changes.",
    ],
  },
];

function Portfolio({
  reference,
  fixedFrameHideFun,
  activePanelSet,
  activePanel,
  topOffsetFixedPanel,
}) {
  const panelRef = useRef();
  const [activeStage, setActiveStage] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    topOffsetFixedPanel(panelRef.current.getBoundingClientRect().top);

    reference.current.addEventListener("scroll", function () {
      setScrollPos(reference.current.scrollTop);
      if (reference.current.scrollTop > window.innerHeight) {
        if (document.getElementById("panel1").offsetTop >= 0) {
          for (let i = 1; i <= categories.length; i++) {
            document.getElementById(`panel${i}`).style.transform =
              "translateY(0px)";
            document.getElementById(`number${i}`).style.opacity = "0";
          }
        }
      } else {
        if (document.getElementById("panel1").offsetTop <= 150) {
          for (let i = 1; i <= categories.length; i++) {
            document.getElementById(`panel${i}`).style.transform =
              "translateY(150px)";
            document.getElementById(`number${i}`).style.opacity = "1";
          }
        }
      }
    });
  }, []);

  const panelClickHandler = (data) => {
    if (scrollPos < window.innerHeight / 1.5) {
      reference.current.scrollTo(0, window.innerHeight - 20);
      return;
    }
    fixedFrameHideFun(true);
    activePanelSet(data.id);
  };

  return (
    <div className="portfolioContainer" id="portfolioContainer">
      {categories.map((data) => {
        return (
          <div
            ref={panelRef}
            key={data.id}
            onClick={() => {
              panelClickHandler(data);
            }}
            className={"panel panel" + data.id}
            id={"panel" + data.id}
            style={
              activePanel === data.id
                ? { flex: 18, transitionDuration: "1s" }
                : { flex: 2 }
            }
          >
            {activePanel === data.id ? (
              <div className="activePanel"></div>
            ) : (
              <div className="fadedImage"></div>
            )}

            {activePanel === data.id ? null : (
              <div
                id="panelTitle"
                onClick={() => setActiveStage(0)}
                style={
                  activePanel !== 0 && activePanel !== data.id
                    ? {
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        height: "100%",
                        alignItems: "center",
                        marginLeft: 0,
                      }
                    : {}
                }
                className="panelTitle"
              >
                {data.title}
              </div>
            )}

            {activePanel === 0 ? (
              <>
                <span className="panelDesc">{data.description}</span>
                <div className="viewBtn">
                  <span>View Projects</span>
                  <img src={Arrow} alt="arrow" />
                </div>
              </>
            ) : activePanel === data.id ? (
              <div className="activePanelItem">
                <div className="activePanelItemContainer">
                  <div className="stageContainer">
                    <div className="stageHeader">
                      <div
                        className="stageHeaderItem"
                        onClick={() => setActiveStage(0)}
                        style={
                          activeStage === 0
                            ? {
                                textDecoration: "underline",
                              }
                            : {}
                        }
                      >
                        <span>Stage1</span>
                        <img src={Arrow} />
                      </div>
                      <div
                        className="stageHeaderItem"
                        onClick={() => setActiveStage(1)}
                        style={
                          activeStage === 1
                            ? {
                                textDecoration: "underline",
                              }
                            : {}
                        }
                      >
                        <span>Stage2</span>
                        <img src={Arrow} />
                      </div>
                      <div
                        className="stageHeaderItem"
                        onClick={() => setActiveStage(2)}
                        style={
                          activeStage === 2
                            ? {
                                textDecoration: "underline",
                              }
                            : {}
                        }
                      >
                        <span>Stage3</span>
                      </div>
                    </div>

                    <div className="stageDesc">
                      <p>{data.stages[parseInt(activeStage)]}</p>
                    </div>
                  </div>

                  <div className="activeDesc">
                    <div className="activeDescTitle">{data.title}</div>
                    <div className="activeDescDescription">
                      {data.description}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
