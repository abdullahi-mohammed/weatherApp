import { useEffect, useState } from 'react'
import styles from './App.module.css'
import DailyForecast from './components/dailyForecast/dailyForecast'
import Hero from './components/hero/hero'
import HourlyForecast from './components/hourlyForecast/hourlyForecast'
import TodaysForecast from './components/todaysForecast/todaysForcast'
import WeatherToday from './components/weatherToday/weatherToday'

function App() {

  const [hourlyForecast, setHourlyForecast] = useState()
  const [dailyForecast, setDailyForecast] = useState()

  const hourlyForecastFn = (html, data) => {
    setHourlyForecast(html, data)
  }

  const dailyForecastFn = (html, data) => {
    setDailyForecast(html, data)
  }



  return (
    <div className={styles.weatherApp}>
      <Hero />
      <TodaysForecast todaysHourlyForecast={hourlyForecast} todaysDailyForecast={dailyForecast} />
      <WeatherToday />
      <HourlyForecast hourlyForecast={hourlyForecastFn} />
      <DailyForecast dailyForecast={dailyForecastFn} />
    </div>
  )
}

export default App
