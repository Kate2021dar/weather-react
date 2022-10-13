import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
	 let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState("");
  let [cityInput, setCityInput] = useState(false);



  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "41c8677f21e466c9b152647e17c8d1ac";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWind (response.data.wind.speed)
    setIcon({
      Icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    setCityInput(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (cityInput){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city .."
            autoFocus="on"
            onChange={updateCity}
            className="Input"
          />
          <input type="submit" value="Search" className="Search" />
        </form>
        <ul className="Data">
          <li>Temperature: {Math.round(temperature)} C°</li>
          <li>Description: {description} </li>
          <li>Humidity: {Math.round(humidity)}%</li>
          <li>Wind:{Math.round(wind)} km/h </li>
          <img src={icon.Icon} alt={setDescription.description} />
        </ul>
        <a
          href="https://github.com/Kate2021dar/weather-react.git"
          target="_blank"
		 
          className="Link"
        >
          Open-source code, by Kate Rybina
        </a>
      </header>
    </div>
  );
    } else {
        return (
          <div className="App">
            <header className="App-header">
              <h1>Weather App</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Enter a city .."
                  autoFocus="on"
                  onChange={updateCity}
                  className="Input"
                />
                <input type="submit" value="Search" className="Search" />
              </form>
              <a
                href="https://github.com/Kate2021dar/weather-react.git"
                target="_blank"
				
                className="Link"
              >
                Open-source code, by Kate Rybina
              </a>
            </header>
          </div>
        );
      }
    }


export default App;
