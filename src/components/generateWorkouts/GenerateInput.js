import React from "react";

const GenerateInput = ({
  muscleGroup,
  onChangeHandler,
  onGenerate,
  onReset,
  onboarding,
  getIsDesktop,
}) => {
  return (
    <div className={`generate-workouts-input ${getIsDesktop()}`}>
      <span>Select your muscle group</span>
      <select
        className="onboard-step disabled"
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
      <div className="btns">
        <button
          className="btn onboard-step disabled"
          disabled={onboarding}
          onClick={onGenerate}
        >
          GENERATE
        </button>
        <button className="btn disabled reset" onClick={onReset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default GenerateInput;
