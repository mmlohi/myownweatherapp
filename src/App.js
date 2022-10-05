import './App.css';
import React, { useState } from 'react';


function WeatherApp() {

  const iconUrl = 'http://openweathermap.org/img/wn/';
  const apiKey = ' copy the api key here';
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');
  const [icon, setIcon] = useState('');
  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=` + apiKey)
        .then(response => response.json())
        .then(data => {

          setWeatherData(data)
          setIcon(iconUrl + data.weather[0].icon + '@2x.png')
          setCity('')
        }
        )
    }
  }
  return (
    <div className='container'>
      <h1>Weather App</h1>
      <input
        className='input'
        placeholder='Please enter locality...'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>Welcome to weather app! Please enter locality in the box below for current weather information.</p>
        </div>
      ) : (
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}°C</p>
          <p className='weather'>{weatherData.weather[0].main}</p>
          <img src={icon} alt='' />

        </div>
      )}
      {weatherData.cod === '404' ? (
        <p>Locality not found.</p>
      ) : (
        <></>
      )}

    </div>

  )
}

export default WeatherApp;
