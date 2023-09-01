import { apiRequest } from "../helpers/apiRequest"

export const getHourlyForecast = async () => {
    try {
        const response = await apiRequest('', 'GET')
        console.log(response, response.forecast.forecastday[0].hour)
        return response
    } catch (error) {
        console.log(error)
    }
}