const BaseURL = 'http://api.weatherapi.com/v1/forecast.json?key=c1d0d0d1154b4d759ea122932233108&q=nigeria'

// export const apiRequest = async function (path, method) {
//     try {
//         const response = await fetch(BaseURL + path, { method: method })
//         const data = await response.json()
//         return data
//     } catch (error) {
//         console.log(error)
//     }
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
