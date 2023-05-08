import React, { useState, useEffect } from "react";
import GenerateInput from "../components/generateWorkouts/GenerateInput";
import GenerateResults from "../components/generateWorkouts/GenerateResults";
import SectionTitle from "../components/reusable/SectionTitle";
import Onboard from "../components/onboarding/Onboard.js";
import axios from "axios";
import { config } from "../config";
import { sampleWorkouts } from "../data/sampleWorkouts";
import { isTablet, isMobile } from "mobile-device-detect";

const GenerateWorkouts = () => {
  const [muscleGroup, setMuscleGroup] = useState("");
  const [workouts, setWorkouts] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [onboarding, setOnboarding] = useState(false);
  const [onboardInput, setOnboardInput] = useState(false);

  const getIsDesktop = () => {
    if (!isTablet && !isMobile) {
      return "is-desktop";
    } else {
      return "";
    }
  };
  console.log(error);
  const onChangeHandler = (e) => {
    setMuscleGroup(e.target.value);
  };
  const onGenerateHandler = () => {
    if (muscleGroup.length > 0) {
      setWorkouts([]);
      setLoading("Fetching Workouts");
      axios({
        method: "get",
        url: `https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`,
        headers: { "X-Api-Key": config.key },
        contentType: "application/json",
      })
        .then(async function (response) {
          if (response.data.length > 0) {
            const { a, b, c } = await generateRandomNums(response.data);
            const threeWorkouts = response.data.filter(
              (workout, index) => index === a || index === b || index === c
            );

            setWorkouts(threeWorkouts);
            setLoading("");
          } else {
            setError(
              "Looks like something went wrong. Please refresh and try again."
            );
            setLoading("");
          }
        })
        .catch(function (err) {
          console.log("err");
          console.log(err);
          setError(err);
        });
    } else {
      return;
    }
  };
  const onResetHandler = () => {
    setMuscleGroup("");
    setWorkouts("");
  };
  const generateRandomNums = (workouts) => {
    return new Promise((resolve) => {
      let a = Math.round(Math.random() * (workouts?.length - 1 - 0) + 0);
      let b = Math.round(Math.random() * (workouts?.length - 1 - 0) + 0);
      let c = Math.round(Math.random() * (workouts?.length - 1 - 0) + 0);

      if (a === b || b === c || a === c) {
        a = Math.round(Math.random() * (workouts?.length - 1 - 0) + 0);
        b = Math.round(Math.random() * (workouts?.length - 1 - 0) + 0);
        c = Math.round(Math.random() * (workouts?.length - 1 - 0) + 0);
      }

      if (a !== b && b !== c && c !== a) resolve({ a, b, c });
    });
  };
  const onboardSequence = () => {
    onResetHandler();
    const onboardHints = Array.from(document.querySelectorAll(".onboard-hint"));
    const onboardSteps = Array.from(document.querySelectorAll(".onboard-step"));
    const select = document.querySelector(".generate-workouts-input select");
    const btns = Array.from(document.querySelectorAll(".btn"));
    const background = document.querySelector(".onboard-background");
    const onboardWrapper = document.querySelector(".onboard");

    btns.map((btn) => {
      return toggleClass(btn, true, "disabled");
    });
    let currIndex = 0;
    let finalIndex = onboardHints.length - 1;

    toggleClass(background, true, "active-hint");

    toggleClass(onboardHints[currIndex], true, "active-hint");
    toggleClass(onboardSteps[currIndex], true, "active-hint");

    // sets value of select dropdown
    setTimeout(() => {
      setOnboardInput(true);
      currIndex += 1;
    }, 1000);

    // begins the interval for setting elements active
    const interval = setInterval(() => {
      // checks if current index is less than or equal to final index of step array
      if (currIndex <= finalIndex) {
        // removes active class from hint and step
        toggleClass(onboardHints[0], false, "active-hint");
        toggleClass(onboardSteps[0], false, "active-hint");

        // sets sample data to workout results
        setTimeout(() => {
          if (currIndex === 1) {
            toggleClass(onboardWrapper, true, "extended");
            setOnboarding(true);
          }
        }, 500);

        // Adds active class to next hint / step
        toggleClass(onboardHints[currIndex], true, "active-hint");
        toggleClass(onboardSteps[currIndex], true, "active-hint");

        // Removes active class from current hint / step before iteration
        const timeout = setTimeout(() => {
          toggleClass(onboardHints[currIndex], false, "active-hint");
          toggleClass(onboardSteps[currIndex], false, "active-hint");

          // Iterates to next step and clears timeout
          currIndex += 1;
          clearTimeout(timeout);
        }, 2000);
      } else {
        // resets onboarding when hint / steps are completed
        resetOnboarding(interval, background, select, onboardWrapper);

        btns.map((btn) => {
          return toggleClass(btn, false, "disabled");
        });
        return;
      }
    }, 2500);
  };
  const resetOnboarding = (interval, background, select, onboardWrapper) => {
    clearInterval(interval);

    // setTimeout(() => {
    //   console.log("reset");
    //   onResetHandler();
    // }, 3500);

    toggleClass(onboardWrapper, false, "extended");
    setOnboarding(false);
    setOnboardInput(false);

    toggleClass(select, false, "disabled");
    toggleClass(background, false, "active-hint");
  };
  const toggleClass = (target, add = true, className) => {
    if (add) {
      target.classList.add(className);
    } else {
      target.classList.remove(className);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      return onboardSequence();
    }, 1500);
  }, []);

  return (
    <div className="generate-workouts">
      <SectionTitle
        className={`generate-workouts-header ${getIsDesktop()}`}
        text={"Generate Workouts"}
        subText={"HELP"}
        fx={onboardSequence}
      />
      <Onboard
        getIsDesktop={getIsDesktop}
        hints={[
          {
            content: "Click the dropdown and select a muscle group.",
            id: 1,
          },
          {
            content: 'Tap "Generate"',
            id: 2,
          },
          {
            content: "Tap a workout for tutorials",
            id: 3,
          },
        ]}
      />
      <GenerateInput
        muscleGroup={onboardInput ? "chest" : muscleGroup}
        workouts={workouts}
        onChangeHandler={onChangeHandler}
        onGenerate={onGenerateHandler}
        onReset={onResetHandler}
        onboarding={onboarding}
        getIsDesktop={getIsDesktop}
      />
      <GenerateResults
        getIsDesktop={getIsDesktop}
        loading={loading}
        workouts={onboarding ? sampleWorkouts : workouts}
      />
    </div>
  );
};

export default GenerateWorkouts;
