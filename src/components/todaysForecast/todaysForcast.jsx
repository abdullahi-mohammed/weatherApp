import React, { useEffect, useState } from 'react'
import styles from './todaysForecast.module.css';
import { Link } from 'react-router-dom';
import { getTodaysForecast } from './helpers';

const TodaysForcast = () => {

    const [currForcast, setCurrForecast] = useState('today') // for mobile screen

    const [todaysForecastData, setTodaysForecastData] = useState()

    useEffect(
        () => {
            (async function () {
                const data = await getTodaysForecast()
                setTodaysForecastData(data)
            })()
        }, [])

    console.log(todaysForecastData)

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
                <button type='button'>Next Hours</button>
            </div>

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
                        <ul>
                            <li>
                                <Link>
                                    <p>Now</p>
                                    <p>26</p>
                                    <img src="" alt="" />
                                    <p>19%</p>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <p>22:00</p>
                                    <p>26</p>
                                    <img src="" alt="" />
                                    <p>19%</p>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <p>22:00</p>
                                    <p>26</p>
                                    <img src="" alt="" />
                                    <p>19%</p>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <p>22:00</p>
                                    <p>26</p>
                                    <img src="" alt="" />
                                    <p>19%</p>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <p>22:00</p>
                                    <p>26</p>
                                    <img src="" alt="" />
                                    <p>19%</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={currForcast == 'daily' && `${styles.forecastActive} ${styles.dailyForecast}`} >
                        <ul>
                            <li>
                                <Link>
                                    <p>Now</p>
                                    <p>26 <span>23</span></p>
                                    <img src="" alt="" />
                                    <p>19%</p>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <p>22:00</p>
                                    <p>26 <span>23</span></p>
                                    <img src="" alt="" />
                                    <p>19%</p>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <p>22:00</p>
                                    <p>26 <span>23</span></p>
                                    <img src="" alt="" />
                                    <p>19%</p>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <p>22:00</p>
                                    <p>26 <span>23</span></p>
                                    <img src="" alt="" />
                                    <p>19%</p>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <p>22:00</p>
                                    <p>26 <span>23</span></p>
                                    <img src="" alt="" />
                                    <p>19%</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TodaysForcast
