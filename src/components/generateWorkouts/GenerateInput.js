import React from "react";
import OnboardHint from "../onboarding/OnboardHint";
import GenerateInputBtn from "./GenerateInputBtn";
const GenerateInput = ({
  muscleGroup,
  onChangeHandler,
  onGenerate,
  onReset,
  fetchingData,
  onboarding,
}) => {
  return (
    <div className="generate-workouts-wrapper onboard-step">
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
        <GenerateInputBtn
          muscleGroup={muscleGroup}
          onboarding={onboarding}
          fetchingData={fetchingData}
          clickEvt={onGenerate}
          content={"GENERATE"}
        />
        <GenerateInputBtn
          muscleGroup={muscleGroup}
          onboarding={onboarding}
          fetchingData={fetchingData}
          clickEvt={onReset}
          reset={true}
          content={"RESET"}
        />
        <OnboardHint
          content={"Tap Generate"}
          classname={"onboard-btns-input"}
        />
      </div>
    </div>
  );
};

export default GenerateInput;
