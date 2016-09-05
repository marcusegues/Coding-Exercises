export const fetchSteps = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/steps',
    success,
    error
  });
};

export const createStep = (step, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/steps',
    data: {step},
    success,
    error
  });
};

export const updateStep = (step, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/steps/${step.id}`,
    data: {step},
    success,
    error
  });
};

export const destroyStep = (step, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/steps/${step.id}`,
    success,
    error
  });
};
