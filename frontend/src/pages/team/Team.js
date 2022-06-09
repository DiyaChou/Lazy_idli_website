import "./team.css";
import React, { useRef } from "react";
import TeamCard from "../../components/teamCard/TeamCard";
import CircleLeftArrowSvg from "../../assets/images/circle-arrow-left.svg";
import CircleRightArrowSvg from "../../assets/images/circle-arrow-right.svg";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Alok Mohanty",
    designation: "Founder",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "m",
  },
  {
    id: 2,
    name: "Anamika",
    designation: "UX/UI Designer",
    gender: "f",
  },
  {
    id: 3,
    name: "Robert George",
    designation: "Industrial Designer",
    gender: "m",
  },
  {
    id: 4,
    name: "Subramaniam",
    designation: "Software Engineer",
    gender: "m",
  },
  {
    id: 5,
    name: "Bikas Adhikari",
    designation: "Software Engineer",
    gender: "m",
  },
];

function Team() {
  const teamCardsRef = useRef();
  const maxItems = 7;

  const scrollNext = () => {
    const element = document.getElementById("teamCards");
    element.scrollBy((element.scrollWidth / maxItems) * 2, 0);
    console.log(element.scrollWidth);
  };

  const scrollPrev = () => {
    const element = document.getElementById("teamCards");
    element.scrollBy(-(element.scrollWidth / maxItems) * 2, 0);
  };

  return (
    <div className="teamContainer">
      <div className="leftPanel">
        <div>Our Team</div>
        <div>We will deliver the best job with the best team</div>
      </div>

      <div className="rightPanel">
        <div className="teamCards" id="teamCards" ref={teamCardsRef}>
          {teamMembers.map((data) => {
            return <TeamCard key={data.id} data={data} />;
          })}
        </div>

        {true ? (
          <div className="teamCardArrows">
            <img
              src={CircleLeftArrowSvg}
              alt="arrow"
              width="50"
              height="50"
              onClick={scrollPrev}
            />
            <img
              src={CircleRightArrowSvg}
              alt="arrow"
              width="50"
              height="50"
              onClick={scrollNext}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Team;
