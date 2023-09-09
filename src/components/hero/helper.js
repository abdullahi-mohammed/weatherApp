import { apiRequest } from "../helpers/apiRequest";

export async function getHeroWeatherData(weatherValue) {
    const response = await apiRequest('', 'GET', weatherValue)
    return response
}