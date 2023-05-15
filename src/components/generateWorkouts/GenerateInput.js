import React from "react";
import OnboardHint from "../onboarding/OnboardHint";
const GenerateInput = ({
  muscleGroup,
  onChangeHandler,
  onGenerate,
  onReset,
  fetchingData,
  onboarding,
  getIsDesktop,
}) => {
  return (
    <div className={`generate-workouts-wrapper onboard-step ${getIsDesktop()}`}>
      <div className="generate-workouts-input">
        <span>Select your muscle group</span>
        <select
          className="disabled"
          value={muscleGroup}
          onChange={onChangeHandler}
        >
          <option value=""></option>
          <option value="chest">Chest</option>
          <option value="lats">Lats</option>
          <option value="biceps">Biceps</option>
          <option value="triceps">Triceps</option>
          <option value="middle_back">Mid Back</option>
          <option value="lower_back">Low Back</option>
          <option value="shoulders">Shoulders</option>
          <option value="glutes">Glutes</option>
          <option value="quadriceps">Quadriceps</option>
          <option value="hamstrings">Hamstrings</option>
          <option value="calves">Calves</option>
          <option value="abdominals">Abdominals</option>
        </select>
        <OnboardHint
          content={"Click the dropdown and select a muscle group."}
          classname={"onboard-select-input"}
        />
      </div>
      <div className="btns">
        <button
          className={`btn onboard-step ${
            muscleGroup.length > 0 && !onboarding && !fetchingData
              ? ""
              : "disabled"
          }`}
          disabled={onboarding}
          onClick={onGenerate}
        >
          GENERATE
        </button>
        <button
          className={`btn reset ${
            muscleGroup.length > 0 && !onboarding && !fetchingData
              ? ""
              : "disabled"
          }
          `}
          onClick={onReset}
        >
          RESET
        </button>{" "}
        <OnboardHint
          content={"Tap Generate"}
          classname={"onboard-btns-input"}
        />
      </div>
    </div>
  );
};

export default GenerateInput;
