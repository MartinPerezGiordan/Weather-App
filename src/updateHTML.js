
export function displayWeather(weatherInfo){
    const {country, temp_c, text, icon, wind_kph, uv, humidity, gif, name} = weatherInfo
    const main = document.querySelector('#main-content')
    const weatherCard = document.createElement('div')
    weatherCard.classList.add('weather-card')
    weatherCard.innerHTML += `<div class="name">${name}</div>`
    weatherCard.innerHTML += `<div class="country">${country}</div>`
    weatherCard.innerHTML += `<img class='condition-icon' src="${icon}">`
    weatherCard.innerHTML += `<div class="condition">${text}</div>`
    weatherCard.innerHTML += `<div class="temp">${temp_c}°C</div>`
    weatherCard.innerHTML += `<div class="wind">Wind: ${wind_kph}kph</div>`
    weatherCard.innerHTML += `<div class="humidity">Humidity: ${humidity}%</div>`

    deleteDisplay(main);
    main.appendChild(weatherCard)
    main.style.backgroundImage = `url(${gif.data.images.original.url})`
}

function deleteDisplay(main){
    const weatherCard = document.querySelector('.weather-card')

    if(weatherCard !== null){
        main.removeChild(weatherCard)
    }
}