import React from 'react';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {name: "", temperature: "", loading: true};

    this.pollWeather = this.pollWeather.bind(this);
  }

  pollWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const xhr = new XMLHttpRequest();
    var that = this;
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=645c5d39c7603f17e23fcaffcea1a3c1`);
    xhr.onload = function() {
      var response = JSON.parse(this.response);
      that.setState({
        name: response.name,
        loading: false,
        temperature: response.main.temp
      });
    };
    xhr.send();
  }

  componentDidMount() {
    var geo = navigator.geolocation;
    if (geo) {
      geo.getCurrentPosition(this.pollWeather);
    }
  }

  render() {
    let content = <div></div>;
    if (this.state.loading) {
      content = (
        <div className="spinner">
          <div className="cube1"></div>
          <div className="cube2"></div>
        </div>
      );
    } else {
      let temp = (this.state.temperature - 273.15);
      content = (
        <div className="weather">
          <p><span>{this.state.name}</span></p>
          <p><span>Temperature: {temp}</span></p>
        </div>
      );
    }

    return (
      <div>
        <h1>Weather</h1>
        {content}
      </div>
    );

  }
}
