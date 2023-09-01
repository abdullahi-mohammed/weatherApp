import { apiRequest } from "../helpers/apiRequest"

export const getTodaysForecast = async () => {
    const response = await apiRequest('&days=1', 'GET')
    return response
}