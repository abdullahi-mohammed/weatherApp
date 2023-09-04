const BaseURL = 'https://api.weatherapi.com/v1/forecast.json?key=c1d0d0d1154b4d759ea122932233108&q=nigeria'

// const BASEURLPLACE = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"

// const place = (location) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await fetch(BASEURLPLACE + location)
//             const data = await response.json()
//             console.log(data)
//             resolve(data)
//         } catch (error) {
//             console.log(error)
//             reject('places fetch failed because of:' + error)
//         }
//     })
// }


export const apiRequest = async function (path, method) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(BaseURL + path, { method: method })
            const data = await response.json()
            resolve(data)
        } catch (error) {
            reject(error)
            console.log(error)
        }
    })

}
