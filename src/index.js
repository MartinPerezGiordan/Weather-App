import './style.css';
import { getWeather } from './getData';
import { createHTML } from './createHTML';

document.addEventListener('DOMContentLoaded', async () => {
    createHTML();


    const searchBtn = document.querySelector('#search-button');
    searchBtn.addEventListener('click', async ()=>{
        const searchInput = document.querySelector('#search-input')
        const inputValue = searchInput.value 
        console.log(await getWeather(inputValue));
    })
  
  });