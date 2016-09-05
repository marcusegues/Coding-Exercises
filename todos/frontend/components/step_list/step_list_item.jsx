import React from 'react';

const StepListItem = ({ step, destroyStep, toggleStep }) => {
  return (
    <div>
      {step.title}
      <button onClick={destroyStep(step)}>Destroy</button>
      <button onClick={toggleStep(step)}>{step.done ? "Undo" : "Done"}</button>
    </div>
  );
};

export default StepListItem;
