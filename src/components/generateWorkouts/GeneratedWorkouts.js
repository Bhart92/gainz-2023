import React from "react";

const GeneratedWorkouts = ({ generator }) => {
  return <div className="generate-results-workouts">{generator()}</div>;
};

export default GeneratedWorkouts;
