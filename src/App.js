import './App.css';
import React, { useState } from 'react';


function WeatherApp() {


  const [weatherData, setWeatherData] = useState({})
  const [city, setCity] = useState('')

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={API_KEY}lang=fi`)
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
