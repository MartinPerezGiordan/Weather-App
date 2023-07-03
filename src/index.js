import './style.css';
import { getWeather } from './getData';
import { createHTML } from './createHTML';
import { displayWeather } from './updateHTML';

document.addEventListener('DOMContentLoaded', async () => {


    createHTML();
    displayWeather(await getWeather('Montevideo'))

    const searchBtn = document.querySelector('#search-button');
    const searchInput = document.querySelector('#search-input')

    searchBtn.addEventListener('click', handleClick);
    searchInput.addEventListener('keypress', handleKeyPress);


    async function handleClick(){
        const inputValue = searchInput.value 
        console.log(await getWeather(inputValue));
        displayWeather(await getWeather(inputValue))
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
          handleClick();
        }
    }


});