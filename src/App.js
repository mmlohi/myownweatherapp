import './App.css';
import React, { useState } from 'react';

function WeatherApp() {

  //const apiKey = '198deb9fcd7620b4432c749aa3e700da'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState('')
  const url='https://api.openweathermap.org/data/2.5/weather?q=Kuusamo&units=metric&appid=198deb9fcd7620b4432c749aa3e700da&lang'

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(url)
      .then(response => response.json()
      ).then(data => {
          setWeatherData(data)
          setCity('')
        }
      )
    }
  }
  return (
    <div className='container'>
      <input
        className='input'
        placeholder='Please enter location...'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>Welcome</p>
          </div>
      ): (
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}°C</p>
          <p className='weather'>{weatherData.weather[0].main}</p>
        </div>
      )}
    

    </div>

  )
}

export default WeatherApp;
