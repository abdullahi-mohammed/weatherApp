import { apiRequest } from "../helpers/apiRequest";

export async function getHeroWeatherData() {
    const response = await apiRequest('', 'GET')
    return response
}