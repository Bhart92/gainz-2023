import React, { useEffect } from "react";

const GeneratedWorkout = ({ workout, i, generateLink, img }) => {
  useEffect(() => {
    const eleArr = Array.from(document.querySelectorAll(".image-wrapper"));
    eleArr.map((ele) => {
      ele.classList.add("active");
    });
    return () => {
      eleArr.map((ele) => {
        ele.classList.remove("active");
      });
    };
  });
  return (
    <div className="generated-workout">
      <img src={img} />
      <a
        href={`https://www.youtube.com/results?search_query=${generateLink(
          workout.name
        )}`}
        target="_blank"
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
