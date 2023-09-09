import { apiRequest } from "../helpers/apiRequest"

export const getTodaysForecast = async (weatherValue) => {
    const response = await apiRequest('&days=1', 'GET',weatherValue)
    return response
}