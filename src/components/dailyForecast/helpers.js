import { apiRequest } from "../helpers/apiRequest"

export const getDailyForecast = async (weatherValue) => {
    try {
        const response = await apiRequest('&days=5', 'GET', weatherValue)
        return response
    } catch (error) {
        console.log(error)
    }
}