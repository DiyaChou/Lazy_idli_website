import { useRef, useState } from "react";
import "./App.css";
import Client from "./pages/client/Client";
import Footer from "./pages/footer/Footer";
import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/portfolio/Portfolio";
import Team from "./pages/team/Team";

function App() {
  const containerRef = useRef();

  const [hidefixedFrame, setFixedFrame] = useState(false);
  const [activePanel, setActivePanel] = useState(0);
  const [fixedPanelTop, setFixedPanelTop] = useState(0);

  //function to hide the fixed frame
  const fixedFrameHide = (isHidden) => {
    setFixedFrame(isHidden);
  };

  //function to get the active panel of the second page
  const activePanelSet = (panel) => {
    setActivePanel(panel);
  };

  //function to get the top of the fixed panel
  const topOffsetFixedPanel = (top) => {
    setFixedPanelTop(top);
  };

  return (
    <>
      <div id="container" ref={containerRef}>
        <div className="page first-page">
          <Landing
            reference={containerRef}
            hidefixedFrame={hidefixedFrame}
            fixedFrameHideFun={fixedFrameHide}
            activePanelSet={activePanelSet}
            fixedPanelTop={fixedPanelTop}
          />
        </div>
        <div className="page second-page">
          <div>
            <Portfolio
              reference={containerRef}
              fixedFrameHideFun={fixedFrameHide}
              activePanelSet={activePanelSet}
              activePanel={activePanel}
              topOffsetFixedPanel={topOffsetFixedPanel}
            />
          </div>
        </div>
        <div className="page third-page">
          <div>
            <Client reference={containerRef} />
          </div>
        </div>
        <div className="page fourth-page">
          <div>
            <Team />
          </div>
        </div>
        <div className="page fifth-page">
          <div>
            <Footer reference={containerRef} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
