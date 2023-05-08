import React from "react";
import GymIcon from "../imgs/GymIcon";
import { Link } from "react-router-dom";
import { isMobile, isTablet } from "mobile-device-detect";

const LandingView = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <div className="landing-header">
          <h1>
            GAINZ <GymIcon />
          </h1>
          <h2>workout randomizer</h2>
        </div>
        <Link to="/generate">GET STARTED</Link>
      </div>
    </div>
  );
};

export default LandingView;
