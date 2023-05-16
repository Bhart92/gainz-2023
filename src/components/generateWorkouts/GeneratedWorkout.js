import React, { useEffect } from "react";

const GeneratedWorkout = ({ workout, i, generateLink, img }) => {
  useEffect(() => {
    const eleArr = Array.from(document.querySelectorAll(".generated-workout"));

    setTimeout(() => {
      eleArr.map((ele) => {
        ele.classList.add("active");
      });
    }, 250);

    return () => {
      eleArr.map((ele) => {
        ele.classList.remove("active");
      });
    };
  }, []);
  return (
    <div className="generated-workout">
      <img src={img} alt={img} />
      <a
        href={`https://www.youtube.com/results?search_query=${generateLink(
          workout.name
        )}`}
        // target="_blank"
        // rel="noreferrer"
        data-index={i}
        value={i}
        className="workout"
      >
        {workout.name}
      </a>
    </div>
  );
};

export default GeneratedWorkout;
