import { apiRequest } from "../helpers/apiRequest"

export const getDailyForecast = async () => {
    try {
        const response = await apiRequest('&days=5', 'GET')
        return response
    } catch (error) {
        console.log(error)
    }
}