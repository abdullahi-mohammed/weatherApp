import React, { useEffect, useState } from 'react'
import styles from './hero.module.css';
import { getHeroWeatherData } from './helper';
import { TimeHours } from '../helpers/dateTime';
import { useContext } from 'react';
import myContext from '../helpers/contextApi';

const Hero = () => {

    const [heroWeaherData, setHeroWeatherData] = useState()

    const weatherValue = useContext(myContext)

    useEffect(() => {
        new Promise(async (resolve, reject) => {
            const response = await getHeroWeatherData(weatherValue)
            resolve(response)
            setHeroWeatherData(response)
            reject('not found error')
        })
    }, [weatherValue])

    return (

        <div className={styles.hero}>
            {heroWeaherData && <>
                <h4> {heroWeaherData.location.name + ', ' + heroWeaherData.location.country} <span>As of {TimeHours}:00 WAT</span>
                </h4>
                <div className={styles.heroBody}>
                    <div>
                        <p>{heroWeaherData.current.temp_c}°</p>
                        <p>{heroWeaherData.current.condition.text}</p>
                        <p>Day {heroWeaherData.forecast.forecastday[0].day.maxtemp_c}° • Night {heroWeaherData.forecast.forecastday[0].day.mintemp_c}°</p>
                    </div>
                    <div>
                        <img src={heroWeaherData.current.condition.icon} alt="" />
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Hero
