import React, { useEffect, useState } from 'react'
import styles from './hero.module.css';
import { getHeroWeatherData } from './helper';
import { TimeHours } from '../helpers/dateTime';

const Hero = () => {

    const [heroWeaherData, setHeroWeatherData] = useState()

    useEffect(() => {
        new Promise(async (resolve, reject) => {
            const response = await getHeroWeatherData()
            resolve(response)
            setHeroWeatherData(response)
            reject('not found error')
        })
    }, [])

    return (
        <div className={styles.hero}>
            {heroWeaherData &&
                <h4> {heroWeaherData.location.name + ', ' + heroWeaherData.location.country} <span>As of {TimeHours}:00 WAT</span></h4>
            }
            {heroWeaherData
                && <div className={styles.heroBody}>
                    <div>
                        <p>{heroWeaherData.current.temp_c}°</p>
                        <p>{heroWeaherData.current.condition.text}</p>
                        <p>Day {heroWeaherData.forecast.forecastday[0].hour[12].temp_c}° • Night {heroWeaherData.forecast.forecastday[0].hour[0].temp_c}°</p>
                    </div>
                    <div>
                        <img src={heroWeaherData.current.condition.icon} alt="" />
                    </div>
                </div>
            }
        </div>
    )
}

export default Hero
