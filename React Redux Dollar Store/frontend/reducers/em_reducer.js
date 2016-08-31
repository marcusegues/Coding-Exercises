const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const emReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SWITCH_EM_CURRENCY":
      return {
        baseCurrency: action.baseCurrency,
        rates: action.rates
      };
    default:
      return state;
  }
}

export default emReducer;
