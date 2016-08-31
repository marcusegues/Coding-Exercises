import React from 'react';
import Currency from './currency';
import { selectEMCurrency } from '../actions.js';

class Emerging extends React.Component {
  constructor(props) {
    super(props)
    this.forceUpdate = this.forceUpdate.bind(this);
    this.props.store.subscribe(this.forceUpdate);

    this.em_currencies = ['CNY', 'BRL', 'HUF', 'MXN', 'RUB', 'MYR', 'SEK', 'TRY', 'ZAR'];

    this.selectEMCurrency = selectEMCurrency.bind(this);
  }

  fetchRates(currency) {
    $.ajax({
      url: `http://api.fixer.io/latest?base=${currency}`,
      type: "GET",
      dataType: "JSON",
      success: function(resp) {

        // tell the store to update with the new base currency and rates;
        // use the action creator 'selectCurrency' to build the object to
        // be dispatched
        this.props.store.dispatch(
          this.selectEMCurrency(resp.base, resp.rates)
        );
      }.bind(this)
    });
  }

  render() {
    const { rates, baseCurrency } = this.props.store.getState().em;

    const currencyOptions = this.em_currencies.map((currency, idx) => (
      <div key={idx}
           onClick={ () => { this.fetchRates(currency) } }
           className="currency-option">
        {currency}
      </div>
    ));

    const currencyNames = Object.keys(rates);
    const currencyRates = currencyNames.map( (currency) => (
      <Currency name={currency}
                rate={rates[currency]}
                key={currency} />
      )
    );

    return (
      <div className="currency-box">
        <h1>{`Emerging Markets`}</h1>
        <h3>Base Currency: {baseCurrency}</h3>
        <div className="currency-selector">
          Get Rates:
          {currencyOptions}
        </div>
        <div className="rates-list">
          {currencyRates}
        </div>
      </div>
    )
  }
}

export default Emerging;
