import React from "react";

const SectionTitle = ({ text, subText, fx }) => {
  return (
    <div className="generate-workouts-header">
      <h1>{text}</h1>
      <span onClick={fx}>{subText}</span>
    </div>
  );
};

export default SectionTitle;
