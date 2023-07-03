


export async function getWeather(location){
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a1345aeeaf6540978ea155911232906&q=${location}`, {mode: 'cors'})
        const weatherData = await response.json();
        const {location: {country, name}, current: {temp_c, temp_f, condition:{text, icon}, wind_kph, humidity, uv}} = weatherData
        let gif = await getGif(text)
        const weatherInfo = {country,name, temp_c, temp_f, text, icon, wind_kph, humidity,uv, gif}
       console.log(weatherInfo)
        return weatherInfo
    }catch{
        const error = 'City not found'
        return error
    }

}

async function getGif(condition){
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=xS9ZYvEkHXih3EX9gXXSW0ehZyVTzlhT&s=weather ${condition}`, {mode: 'cors'})
        const gif = await response.json();
        return gif
}