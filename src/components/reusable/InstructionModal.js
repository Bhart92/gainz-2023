import React from "react";

const InstructionModal = ({ workout }) => {
  const closeModal = () => {
    const modal = document.querySelectorAll(".instruction-modal");
    Array.from(modal).forEach((ele) => {
      ele.classList.remove("active");
    });
  };
  console.log(workout);
  return (
    <div className="instruction-modal">
      <div>{workout.name}</div>
      <div>
        <span>{workout.instructions}</span>
      </div>
      <div>
        <span onClick={closeModal}>X</span>
      </div>
    </div>
  );
};

export default InstructionModal;
