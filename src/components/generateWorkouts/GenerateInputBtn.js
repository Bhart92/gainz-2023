import React from "react";

const GenerateInputBtn = ({
  muscleGroup,
  onboarding,
  fetchingData,
  clickEvt,
  content,
  reset = false,
}) => {
  return (
    <button
      className={`btn  ${!reset ? "onboard-step" : ""} ${
        reset ? "reset" : ""
      } ${
        muscleGroup.length > 0 && !onboarding && !fetchingData ? "" : "disabled"
      }`}
      disabled={onboarding}
      onClick={clickEvt}
    >
      {content}
    </button>
  );
};

export default GenerateInputBtn;
