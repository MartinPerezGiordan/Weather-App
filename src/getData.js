


export async function getWeather(location){
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a1345aeeaf6540978ea155911232906&q=${location}`, {mode: 'cors'})
        const weatherData = await response.json();
        const {location: {country}, current: {temp_c, temp_f, condition:{text, icon}, wind_kph, humidity, uv}} = weatherData
        const weatherInfo = {country, temp_c, temp_f, text, icon, wind_kph, humidity,uv}
        return weatherInfo
    }catch{
        const error = 'City not found'
        return error
    }

}

