import { apiRequest } from "../helpers/apiRequest"

export const getWeatherToday = async (weatherValue) => {
    const response = await apiRequest('', 'GET', weatherValue)
    return response
}