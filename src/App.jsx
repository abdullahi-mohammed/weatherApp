import { useEffect, useState } from 'react'
import styles from './App.module.css'
import DailyForecast from './components/dailyForecast/dailyForecast'
import Hero from './components/hero/hero'
import HourlyForecast from './components/hourlyForecast/hourlyForecast'
import TodaysForecast from './components/todaysForecast/todaysForcast'
import WeatherToday from './components/weatherToday/weatherToday'
import myContext from './components/helpers/contextApi';
import { apiRequest } from './components/helpers/apiRequest'


function App() {
  const [hourlyForecast, setHourlyForecast] = useState()
  const [dailyForecast, setDailyForecast] = useState()

  const [searchVal, setSearchVal] = useState('')
  const [weatherValue, setWeatherValue] = useState('')
  const [error, setError] = useState()

  const hourlyForecastFn = (html, data) => {
    setHourlyForecast(html, data)
  }

  const dailyForecastFn = (html, data) => {
    setDailyForecast(html, data)
  }

  const handleWeatherSearch = (e) => {
    e.preventDefault()
    const value = e.target.value
    setSearchVal(value);
  }

  const handleWeatherSubmit = (e) => {
    e.preventDefault()
    setWeatherValue(searchVal)
    setSearchVal('')
  }

  const position = (coords) => {
    const lat = coords.coords.latitude;
    const lon = coords.coords.longitude;
    setWeatherValue(lat, lon)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position)
  }, [])



  useEffect(() => {
    (async function () {
      try {
        await apiRequest('', 'GET', weatherValue)
        setError('')
      } catch (error) {
        setError(true)
        console.log(error);
      }

    })()
  }, [weatherValue])


  return (
    <myContext.Provider value={weatherValue}>
      <div className={styles.weatherApp}>

        <header className={styles.weatherSearch} >
          <form onSubmit={handleWeatherSubmit} action="">
            <input onChange={handleWeatherSearch} placeholder='Search city, state, country' value={searchVal} type="text" name="" id="weatherSearch" />
            <button type='submit'>Search</button>
          </form>
          {error ? <div>Weather Fetch Failed Check Spellings</div> : null}
        </header>

        <Hero />
        <TodaysForecast todaysHourlyForecast={hourlyForecast} todaysDailyForecast={dailyForecast} />
        <WeatherToday />
        <HourlyForecast hourlyForecast={hourlyForecastFn} />
        <DailyForecast dailyForecast={dailyForecastFn} />
      </div >
    </myContext.Provider>

  )
}

export default App
