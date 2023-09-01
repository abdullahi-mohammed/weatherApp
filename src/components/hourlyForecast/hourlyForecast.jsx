import React, { useEffect, useState } from 'react'
import styles from './hourlyForecast.module.css'
import { Link } from 'react-router-dom'
import { getHourlyForecast } from './helper';
import { TimeHours } from '../helpers/dateTime';

const HourlyForecast = (props) => {

    const [hourlyForecastData, setHourlyForecastData] = useState()

    useEffect(() => {
        async function hourlyForecast() {
            const data = await getHourlyForecast()
            console.log(data)
            setHourlyForecastData(data)
        }
        hourlyForecast()
    }, [])

    useEffect(() => {
        props.hourlyForecast(hourlyForecast, hourlyForecastData)
    }, [hourlyForecastData])


    const hourlyForecast =
        <ul>
            <li>
                <Link>
                    <p>{hourlyForecastData ? 'Now' : '_ _'}</p>
                    <p>{hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 0 > 23 ? 23 - TimeHours + 0 : TimeHours + 0].temp_c : '_ _'}</p>
                    <img src={hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 0 > 23 ? 23 - TimeHours + 0 : TimeHours + 0].condition.icon : '_ _'} alt="" />
                    <p>{hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 0 > 23 ? 23 - TimeHours + 0 : TimeHours + 0].chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{TimeHours ? (TimeHours + 1 > 23 ? 23 - TimeHours + 1 : TimeHours + 1) : '_ _'}:00</p>
                    <p>{hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 1 > 23 ? 23 - TimeHours + 1 : TimeHours + 1].temp_c : '_ _'}</p>
                    <img src={hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 1 > 23 ? 23 - TimeHours + 1 : TimeHours + 1].condition.icon : '_ _'} alt="" />
                    <p>{hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 1 > 23 ? 23 - TimeHours + 1 : TimeHours + 1].chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{TimeHours ? (TimeHours + 2 > 23 ? 23 - TimeHours + 2 : TimeHours + 2) : '_ _'}:00</p>
                    <p>{hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 2 > 23 ? 23 - TimeHours + 2 : TimeHours + 2].temp_c : '_ _'}</p>
                    <img src={hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 2 > 23 ? 23 - TimeHours + 2 : TimeHours + 2].condition.icon : '_ _'} alt="" />
                    <p>{hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 2 > 23 ? 23 - TimeHours + 2 : TimeHours + 2].chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{TimeHours ? (TimeHours + 3 > 23 ? 23 - TimeHours + 3 : TimeHours + 3) : '_ _'}:00</p>
                    <p>{hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 3 > 23 ? 23 - TimeHours + 3 : TimeHours + 3].temp_c : '_ _'}</p>
                    <img src={hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 3 > 23 ? 23 - TimeHours + 3 : TimeHours + 3].condition.icon : '_ _'} alt="" />
                    <p>{hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 3 > 23 ? 23 - TimeHours + 3 : TimeHours + 3].chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{TimeHours ? (TimeHours + 4 > 23 ? 23 - TimeHours + 4 : TimeHours + 4) : '_ _'}:00</p>
                    <p>{hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 4 > 23 ? 23 - TimeHours + 4 : TimeHours + 4].temp_c : '_ _'}</p>
                    <img src={hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 4 > 23 ? 23 - TimeHours + 4 : TimeHours + 4].condition.icon : '_ _'} alt="" />
                    <p>{hourlyForecastData ? hourlyForecastData.forecast.forecastday[0].hour[TimeHours + 4 > 23 ? 23 - TimeHours + 4 : TimeHours + 4].chance_of_rain : '_ _'}%</p>
                </Link>
            </li>
        </ul>

    return (
        <div className={styles.hourlyForecast}>
            <h4>Hourly Forecast</h4>
            {hourlyForecastData && hourlyForecast}
            {/* <button type='button'>Next 48 Hours</button> */}
        </div>
    )
}

export default HourlyForecast
