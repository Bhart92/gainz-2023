import React from "react";

const OnboardHint = ({ content, classname }) => {
  return (
    <div className={`onboard-hint ${classname}`}>
      <div className="onboard-wrapper">
        <div className="arrow" />
        <span>{content}</span>
      </div>
    </div>
  );
};

export default OnboardHint;
