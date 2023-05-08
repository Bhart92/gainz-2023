import React from "react";
import OnboardHint from "./OnboardHint";
const Onboard = ({ hints, getIsDesktop }) => {
  const generateHints = (getIsDesktop) => {
    return hints.map((hint) => {
      return (
        <div className={`hint-wrapper ${getIsDesktop()}`} key={hint.id}>
          <OnboardHint content={hint.content} />
        </div>
      );
    });
  };
  return (
    <div className="onboard">
      <div className="onboard-background" />
      <div className="onboard-hint-wrapper">{generateHints(getIsDesktop)}</div>
    </div>
  );
};
export default Onboard;
