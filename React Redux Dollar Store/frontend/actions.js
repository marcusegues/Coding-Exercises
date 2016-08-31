const selectCurrency = (baseCurrency, rates) => ({
  type: "SWITCH_CURRENCY",
  baseCurrency: baseCurrency,
  rates: rates
});

const selectEMCurrency = (baseCurrency, rates) => ({
  type: "SWITCH_EM_CURRENCY",
  baseCurrency: baseCurrency,
  rates: rates
});

export { selectCurrency, selectEMCurrency };
