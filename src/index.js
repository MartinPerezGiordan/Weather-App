import './style.css';
import { getWeather } from './getData';
import { createHTML } from './createHTML';
import { displayWeather } from './updateHTML';

document.addEventListener('DOMContentLoaded', async () => {


    createHTML();
    displayWeather(await getWeather('Montevideo'))

    const searchBtn = document.querySelector('#search-button');
    searchBtn.addEventListener('click', async ()=>{
        const searchInput = document.querySelector('#search-input')
        const inputValue = searchInput.value 
        console.log(await getWeather(inputValue));
        displayWeather(await getWeather(inputValue))
    })
  
});