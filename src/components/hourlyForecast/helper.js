import { apiRequest } from "../helpers/apiRequest"

export const getHourlyForecast = async () => {
    try {
        const response = await apiRequest('', 'GET')
        return response.forecast.forecastday[0].hour
    } catch (error) {
        console.log(error)
    }
}