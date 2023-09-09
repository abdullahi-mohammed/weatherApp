import React, { useContext, useEffect, useState } from 'react'
import styles from './dailyForecast.module.css'
import { getDailyForecast } from './helpers'
import { Link } from 'react-router-dom'
import { dateDays } from '../helpers/dateTime'
import myContext from '../helpers/contextApi'

const DailyForecast = (props) => {
    const [dailyForecastData, setDailyForecastData] = useState()
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const weatherValue = useContext(myContext)

    useEffect(
        () => {
            async function data() {
                const response = await getDailyForecast(weatherValue)
                setDailyForecastData(response.forecast.forecastday)
            }
            data()
        }, [weatherValue])

    useEffect(() => {
        props.dailyForecast(dailyForecast, dailyForecastData)
    }, [dailyForecastData])

    const dailyForecast =
        dailyForecastData &&
        <ul>
            <li>
                <Link>
                    <p>Today</p>
                    <p>{dailyForecastData[0].day.maxtemp_c} <span>{dailyForecastData[0].day.mintemp_c}</span></p>
                    <img src={dailyForecastData[0]?.day.condition.icon} alt="" />
                    <p>{dailyForecastData[0].day.daily_chance_of_rain}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{(dateDays + 1 > 6 ? DAYS[dateDays + 1 - 7] : DAYS[dateDays + 1])}{' '}{dailyForecastData[1].date.split('-')[2]}</p>
                    <p>{dailyForecastData[1].day.maxtemp_c} <span>{dailyForecastData[1].day.mintemp_c}</span></p>
                    <img src={dailyForecastData[1]?.day.condition.icon} alt="" />
                    <p>{dailyForecastData[1].day.daily_chance_of_rain}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{(dateDays + 2 > 6 ? DAYS[dateDays + 2 - 7] : DAYS[dateDays + 2])}{' '}{dailyForecastData[2].date.split('-')[2]}</p>
                    <p>{dailyForecastData[2].day.maxtemp_c} <span>{dailyForecastData[2].day.mintemp_c}</span></p>
                    <img src={dailyForecastData[2]?.day.condition.icon} alt="" />
                    <p>{dailyForecastData[2].day.daily_chance_of_rain}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{(dateDays + 3 > 6 ? DAYS[dateDays + 3 - 7] : DAYS[dateDays + 3])}{' '}{dailyForecastData[3].date.split('-')[2]}</p>
                    <p>{dailyForecastData[3].day.maxtemp_c} <span>{dailyForecastData[3].day.mintemp_c}</span></p>
                    <img src={dailyForecastData[3]?.day.condition.icon} alt="" />
                    <p>{dailyForecastData[3].day.daily_chance_of_rain}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{(dateDays + 4 > 6 ? DAYS[dateDays + 4 - 7] : DAYS[dateDays + 4])}{' '}{dailyForecastData[4].date.split('-')[2]}</p>
                    <p>{dailyForecastData[4].day.maxtemp_c} <span>{dailyForecastData[4].day.mintemp_c}</span></p>
                    <img src={dailyForecastData[4]?.day.condition.icon} alt="" />
                    <p>{dailyForecastData[4].day.daily_chance_of_rain}%</p>
                </Link>
            </li>
        </ul>



    return (
        <div className={styles.dailyForecast}>
            <h4>Daily Forecast</h4>
            {dailyForecast}
            {/* <button type='button'>Next 10 Days</button> */}
        </div>
    )
}

export default DailyForecast
