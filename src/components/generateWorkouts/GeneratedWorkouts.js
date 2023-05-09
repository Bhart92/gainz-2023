import React from "react";

const GeneratedWorkouts = ({ generator, getIsDesktop }) => {
  return (
    <div className={`generate-results-workouts ${getIsDesktop()}`}>
      {generator()}
    </div>
  );
};

export default GeneratedWorkouts;
