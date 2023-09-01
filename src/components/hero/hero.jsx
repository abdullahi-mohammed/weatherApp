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
            console.log(response, 'promise resolved')
        })
    }, [])

    console.log(heroWeaherData);

    const date = new Date()
    console.log(date);

    return (
        <div className={styles.hero}>
            <h4>Suleja, Niger <span>As of {TimeHours}:00 WAT</span></h4>
            {heroWeaherData
                && <div className={styles.heroBody}>
                    <div>
                        <p>{heroWeaherData ? heroWeaherData.current.temp_c : '_ _'}°</p>
                        <p>{heroWeaherData ? heroWeaherData.current.condition.text : '_ _'}</p>
                        <p>Day {heroWeaherData ? heroWeaherData.forecast.forecastday[0].hour[12].temp_c : '_ _'}° • Night {heroWeaherData ? heroWeaherData.forecast.forecastday[0].hour[0].temp_c : '_ _'}°</p>
                    </div>
                    <div>
                        <img src={heroWeaherData ? heroWeaherData.current.condition.icon : '_ _'} alt="" />
                    </div>
                </div>
            }
        </div>
    )
}

export default Hero
