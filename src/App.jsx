import { useState } from 'react'
import styles from './App.module.css'
import DailyForecast from './components/dailyForecast/dailyForecast'
import Hero from './components/hero/hero'
import HourlyForecast from './components/hourlyForecast/hourlyForecast'
import TodaysForcast from './components/todaysForecast/todaysForcast'
import WeatherToday from './components/weatherToday/weatherToday'

function App() {
  return (
    <div className={styles.weatherApp}>
      <Hero />
      <TodaysForcast />
      <WeatherToday />
      <HourlyForecast />
      <DailyForecast />
    </div>
  )
}

export default App
