import React, { useContext, useEffect, useState } from 'react'
import styles from './hourlyForecast.module.css'
import { Link } from 'react-router-dom'
import { getHourlyForecast } from './helper';
import { TimeHours } from '../helpers/dateTime';
import myContext from '../helpers/contextApi';

const HourlyForecast = (props) => {

    const [hourlyForecastData, setHourlyForecastData] = useState()

    const weatherValue = useContext(myContext)

    useEffect(() => {
        async function hourlyForecast() {
            const data = await getHourlyForecast(weatherValue)
            setHourlyForecastData(data)
        }
        hourlyForecast()
    }, [weatherValue])

    useEffect(() => {
        props.hourlyForecast(hourlyForecast, hourlyForecastData)
    }, [hourlyForecastData])



    const hourlyForecast =
        hourlyForecastData && <ul>
            <li>
                <Link>
                    <p>Now</p>
                    <p>{hourlyForecastData[TimeHours + 0 > 23 ? (TimeHours + 0) - 23 : TimeHours + 0].temp_c}</p>
                    <img src={hourlyForecastData[TimeHours + 0 > 23 ? (TimeHours + 0) - 23 : TimeHours + 0].condition.icon} alt="" />
                    <p>{hourlyForecastData[TimeHours + 0 > 23 ? (TimeHours + 0) - 23 : TimeHours + 0].chance_of_rain}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{TimeHours + 1 > 23 ? (TimeHours + 1) - 23 : TimeHours + 1}:00</p>
                    <p>{hourlyForecastData[TimeHours + 1 > 23 ? (TimeHours + 1) - 23 : TimeHours + 1].temp_c}</p>
                    <img src={hourlyForecastData[TimeHours + 1 > 23 ? (TimeHours + 1) - 23 : TimeHours + 1].condition.icon} alt="" />
                    <p>{hourlyForecastData[TimeHours + 1 > 23 ? (TimeHours + 1) - 23 : TimeHours + 1].chance_of_rain}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{TimeHours + 2 > 23 ? 23 - TimeHours + 2 : TimeHours + 2}:00</p>
                    <p>{hourlyForecastData[TimeHours + 2 > 23 ? 23 - TimeHours + 2 : TimeHours + 2].temp_c}</p>
                    <img src={hourlyForecastData[TimeHours + 2 > 23 ? 23 - TimeHours + 2 : TimeHours + 2].condition.icon} alt="" />
                    <p>{hourlyForecastData[TimeHours + 2 > 23 ? 23 - TimeHours + 2 : TimeHours + 2].chance_of_rain}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{TimeHours + 3 > 23 ? (TimeHours + 3) - 23 : TimeHours + 3}:00</p>
                    <p>{hourlyForecastData[TimeHours + 3 > 23 ? (TimeHours + 3) - 23 : TimeHours + 3].temp_c}</p>
                    <img src={hourlyForecastData[TimeHours + 3 > 23 ? (TimeHours + 3) - 23 : TimeHours + 3].condition.icon} alt="" />
                    <p>{hourlyForecastData[TimeHours + 3 > 23 ? (TimeHours + 3) - 23 : TimeHours + 3].chance_of_rain}%</p>
                </Link>
            </li>
            <li>
                <Link>
                    <p>{TimeHours + 4 > 23 ? (TimeHours + 4) - 23 : TimeHours + 4}:00</p>
                    <p>{hourlyForecastData[TimeHours + 4 > 23 ? (TimeHours + 4) - 23 : TimeHours + 4].temp_c}</p>
                    <img src={hourlyForecastData[TimeHours + 4 > 23 ? (TimeHours + 4) - 23 : TimeHours + 4].condition.icon} alt="" />
                    <p>{hourlyForecastData[TimeHours + 4 > 23 ? (TimeHours + 4) - 23 : TimeHours + 4].chance_of_rain}%</p>
                </Link>
            </li>
        </ul>

    return (
        <div className={styles.hourlyForecast}>

            {hourlyForecastData && <>
                <h4>Hourly Forecast</h4>
                {hourlyForecast}
            </>}
            {/* <button type='button'>Next 48 Hours</button> */}
        </div>
    )
}

export default HourlyForecast
