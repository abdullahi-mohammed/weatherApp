import { apiRequest } from "../helpers/apiRequest"

export const getHourlyForecast = async (weatherValue) => {
    try {
        const response = await apiRequest('', 'GET', weatherValue)
        return response.forecast.forecastday[0].hour
    } catch (error) {
        console.log(error)
    }
}