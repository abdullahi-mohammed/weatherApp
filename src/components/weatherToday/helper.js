import { apiRequest } from "../helpers/apiRequest"

export const getWeatherToday = async () => {
    const response = await apiRequest('', 'GET')
    return response
}