const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const genReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SWITCH_CURRENCY":
      return {
        baseCurrency: action.baseCurrency,
        rates: action.rates
      };
    default:
      return state;
  }
};

export default genReducer;
