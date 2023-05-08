import React from "react";

const OnboardHint = ({ content }) => {
  return (
    <div className="onboard-hint">
      <div className="arrow" />
      <span>{content}</span>
    </div>
  );
};

export default OnboardHint;
