import React from "react";
import chestImg from "../../imgs/chest.png";
import shoulderImg from "../../imgs/shoulder.png";
import legImg from "../../imgs/leg.png";
import armsImg from "../../imgs/arms.png";
import absImg from "../../imgs/abs.png";
import backImg from "../../imgs/back.png";
import GeneratedWorkout from "./GeneratedWorkout";
import GeneratedLoader from "./GeneratedLoader";
import GeneratedWorkouts from "./GeneratedWorkouts";

const GenerateResults = ({ workouts, loading, getIsDesktop }) => {
  const generateLink = (name) => {
    return name.replaceAll(" ", "+").replaceAll("/", "+").replaceAll("-", "+");
  };
  const imgSelector = (muscle) => {
    switch (muscle) {
      case "chest":
        return chestImg;
      case "shoulders":
        return shoulderImg;
      case "biceps":
        return armsImg;
      case "lats":
        return backImg;
      case "lower_back":
        return backImg;
      case "middle_back":
        return backImg;
      case "triceps":
        return armsImg;
      case "hamstrings":
        return legImg;
      case "glutes":
        return legImg;
      case "quadriceps":
        return legImg;
      case "abdominals":
        return absImg;
      default:
        break;
    }
  };
  const generateWorkoutMarkup = () => {
    return (
      workouts &&
      workouts?.map((workout, i) => {
        return (
          <div className="workout-wrapper" key={workout.name}>
            <div className="workout-content">
              <GeneratedWorkout
                img={imgSelector(workout.muscle)}
                workout={workout}
                i={i}
                generateLink={generateLink}
              />
            </div>
          </div>
        );
      })
    );
  };
  return (
    <div className={`generate-results onboard-step ${getIsDesktop()}`}>
      <div className="generate-results-title">
        <span>Your workouts</span>
      </div>
      {loading ? (
        <GeneratedLoader />
      ) : (
        <GeneratedWorkouts generator={generateWorkoutMarkup} />
      )}
    </div>
  );
};

export default GenerateResults;
