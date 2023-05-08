import React from "react";

const SectionTitle = ({ text, subText, className, fx }) => {
  return (
    <div className={className}>
      <h1>{text}</h1>
      <span onClick={fx}>{subText}</span>
    </div>
  );
};

export default SectionTitle;
