import React, { useEffect, useState } from 'react'
import styles from './todaysForecast.module.css';
import { Link } from 'react-router-dom';
import { getTodaysForecast } from './helpers';

const TodaysForecast = ({ todaysHourlyForecast, todaysDailyForecast }) => {

    const [currForcast, setCurrForecast] = useState('today') // for mobile screen

    const [todaysForecastData, setTodaysForecastData] = useState()

    console.log(todaysDailyForecast)

    useEffect(
        () => {
            (async function () {
                const data = await getTodaysForecast()
                setTodaysForecastData(data)
            })()
        }, [])

    console.log(todaysForecastData)
    console.log(todaysHourlyForecast);

    const todaysForecast =
        <ul className={styles.daysWeb}>
            <li>
                <Link >
                    <p>Morning</p>
                    <p>{todaysForecastData ? todaysForecastData.forecast.forecastday[0].hour[7].temp_c : '_ _'}</p>
                    <img src={todaysForecastData ? todaysForecastData.forecast.forecastday[0].hour[7].condition.icon : '_ _'} alt="" />
                    <p>{todaysForecastData ? todaysForecastData.forecast.forecastday[0].day.daily_chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>Afternoon</p>
                    <p>{todaysForecastData ? todaysForecastData.forecast.forecastday[0].hour[7].temp_c : '_ _'}</p>
                    <img src={todaysForecastData ? todaysForecastData.forecast.forecastday[0].hour[7].condition.icon : '_ _'} alt="" />
                    <p>{todaysForecastData ? todaysForecastData.forecast.forecastday[0].day.daily_chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>Evening</p>
                    <p>{todaysForecastData ? todaysForecastData.forecast.forecastday[0].hour[7].temp_c : '_ _'}</p>
                    <img src={todaysForecastData ? todaysForecastData.forecast.forecastday[0].hour[7].condition.icon : '_ _'} alt="" />
                    <p>{todaysForecastData ? todaysForecastData.forecast.forecastday[0].day.daily_chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
            <li className={styles.active}>
                <Link>
                    <p>Overnight</p>
                    <p>{todaysForecastData ? todaysForecastData.forecast.forecastday[0].hour[7].temp_c : '_ _'}</p>
                    <img src={todaysForecastData ? todaysForecastData.forecast.forecastday[0].hour[7].condition.icon : '_ _'} alt="" />
                    <p>{todaysForecastData ? todaysForecastData.forecast.forecastday[0].day.daily_chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
        </ul>
    return (
        <>
            <div className={styles.todaysForecastWeb}>
                <h4>Today's Forecast for Suleja, Niger</h4>
                {todaysForecast}
                {/* <button type='button'>Next Hours</button> */}
            </div>

            {/* mobile screen */}
            <div className={styles.forecast}>
                <h4>Suleja, Niger Forecast</h4>
                <ul>
                    <li className={currForcast == 'today' && styles.activeForecast} onClick={() => setCurrForecast('today')}>Today</li>
                    <li className={currForcast == 'hourly' && styles.activeForecast} onClick={() => setCurrForecast('hourly')}>Hourly</li>
                    <li className={currForcast == 'daily' && styles.activeForecast} onClick={() => setCurrForecast('daily')}>Daily</li>
                </ul>
                <div className={styles.forecasts}>
                    <div className={currForcast == 'today' && `${styles.forecastActive} ${styles.daysweb}`}>
                        {todaysForecast}
                    </div >
                    <div className={currForcast == 'hourly' && `${styles.forecastActive} ${styles.hourlyForecast}`}>
                        {todaysHourlyForecast}
                    </div>
                    <div className={currForcast == 'daily' && `${styles.forecastActive} ${styles.dailyForecast}`} >
                        {todaysDailyForecast}
                    </div>
                </div>

            </div>
        </>
    )
}

export default TodaysForecast
