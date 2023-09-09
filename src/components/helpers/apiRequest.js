
export const apiRequest = async function (path, method = 'GET', weatherSearchValue = 'nigeria') {
    const BASEURL = `https://api.weatherapi.com/v1/forecast.json?key=c1d0d0d1154b4d759ea122932233108&q=${weatherSearchValue || 'nigeria'}`
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(BASEURL + path, { method: method })

            if (response.ok) {
                const data = await response.json()
                resolve(data)
            } else {
                throw new error('weather fetch failled');
            }
        } catch (error) {
            reject(error)
            console.log(error, 'api reuest error')
        }
    })

}


// export async function spellChecker(checkValue) {

//     const url = 'https://textgears-textgears-v1.p.rapidapi.com/detect';
//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             'X-RapidAPI-Key': '9762db8915mshf05d59b0720b1e0p1f0f88jsn78d14974236e',
//             'X-RapidAPI-Host': 'textgears-textgears-v1.p.rapidapi.com'
//         },
//         body: new URLSearchParams({
//             text: checkValue.toString()
//         })
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result, 'spell checker succes');
//     } catch (error) {
//         console.error(error, 'spell checker failed');
//     }

// }



