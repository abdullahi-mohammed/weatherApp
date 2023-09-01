import React, { useEffect, useState } from 'react'
import styles from './dailyForecast.module.css'
import { getDailyForecast } from './helpers'
import { Link } from 'react-router-dom'
import { dateDays } from '../helpers/dateTime'

const DailyForecast = (props) => {
    const [dailyForecastData, setDailyForecastData] = useState()
    const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    useEffect(
        () => {
            async function data() {
                const response = await getDailyForecast()
                console.log(response)
                setDailyForecastData(response.forecast.forecastday)
            }
            data()
        }, [])

    useEffect(() => {
        props.dailyForecast(dailyForecast, dailyForecastData)
    }, [])

    const dailyForecast =
        <ul>
            <li>
                <Link>
                    <p>{dailyForecastData ? 'Today' : '_ _'} </p>
                    <p>{dailyForecastData ? dailyForecastData[0].day.maxtemp_c : '_ _'} <span>{dailyForecastData ? dailyForecastData[0].day.mintemp_c : '_ _'}</span></p>
                    <img src={dailyForecastData ? dailyForecastData[0]?.day.condition.icon : '_ _'} alt="" />
                    <p>{dailyForecastData ? dailyForecastData[0].day.daily_chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{dateDays ? (dateDays + 1 > 6 ? DAYS[dateDays + 1 - 7] : DAYS[dateDays + 1]) : '_ _'}{' '}{dailyForecastData ? dailyForecastData[1].date.split('-')[2] : '_ _'}</p>
                    <p>{dailyForecastData ? dailyForecastData[1].day.maxtemp_c : '_ _'} <span>{dailyForecastData ? dailyForecastData[1].day.mintemp_c : '_ _'}</span></p>
                    <img src={dailyForecastData ? dailyForecastData[1]?.day.condition.icon : '_ _'} alt="" />
                    <p>{dailyForecastData ? dailyForecastData[1].day.daily_chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{dateDays ? (dateDays + 2 > 6 ? DAYS[dateDays + 2 - 7] : DAYS[dateDays + 2]) : '_ _'}{' '}{dailyForecastData ? dailyForecastData[2].date.split('-')[2] : '_ _'}</p>
                    <p>{dailyForecastData ? dailyForecastData[2].day.maxtemp_c : '_ _'} <span>{dailyForecastData ? dailyForecastData[2].day.mintemp_c : '_ _'}</span></p>
                    <img src={dailyForecastData ? dailyForecastData[2]?.day.condition.icon : '_ _'} alt="" />
                    <p>{dailyForecastData ? dailyForecastData[2].day.daily_chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{dateDays ? (dateDays + 3 > 6 ? DAYS[dateDays + 3 - 7] : DAYS[dateDays + 3]) : '_ _'}{' '}{dailyForecastData ? dailyForecastData[3].date.split('-')[2] : '_ _'}</p>
                    <p>{dailyForecastData ? dailyForecastData[3].day.maxtemp_c : '_ _'} <span>{dailyForecastData ? dailyForecastData[3].day.mintemp_c : '_ _'}</span></p>
                    <img src={dailyForecastData ? dailyForecastData[3]?.day.condition.icon : '_ _'} alt="" />
                    <p>{dailyForecastData ? dailyForecastData[3].day.daily_chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{dateDays ? (dateDays + 4 > 6 ? DAYS[dateDays + 4 - 7] : DAYS[dateDays + 4]) : '_ _'}{' '}{dailyForecastData ? dailyForecastData[4].date.split('-')[2] : '_ _'}</p>
                    <p>{dailyForecastData ? dailyForecastData[4].day.maxtemp_c : '_ _'} <span>{dailyForecastData ? dailyForecastData[4].day.mintemp_c : '_ _'}</span></p>
                    <img src={dailyForecastData ? dailyForecastData[4]?.day.condition.icon : '_ _'} alt="" />
                    <p>{dailyForecastData ? dailyForecastData[4].day.daily_chance_of_rain : '_ _'}%</p>
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
