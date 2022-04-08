
import {movieCard} from "./modules/movieCard.js";
import {createHistory} from "./modules/createHistory.js";
import {errorFunc} from "./modules/errorFunc.js";
import {countOfSearch} from "./modules/countOfSearch.js";
import {buttonHistoryFunc, buttonHistoryRemoveFunc, buttonMovieFunc} from "./modules/buttons.js";

const elemResult = document.getElementById('movie_results');

if (localStorage.length === 0) {
    localStorage.setItem('movies_titles', ['Naruto', 'Titanic']);
}

let storeMovie = localStorage.getItem('movies_titles');
storeMovie = storeMovie.split(',');
const store = document.getElementById('history');

createHistory(storeMovie, store);
buttonHistoryFunc();
buttonHistoryRemoveFunc();

document.getElementById("year").innerHTML = new Date().getFullYear();

document.querySelector('input').addEventListener('keydown', async function(e) {
    if (e.key === "Enter") {
        while (store.firstChild) {
            store.removeChild(store.lastChild);
        }
        storeMovie.unshift(this.value);
        while (elemResult.firstChild) {
            elemResult.removeChild(elemResult.lastChild);
        }
        try {
            const loader = document.querySelector('#no_results');
            const loader_img = document.createElement("img");
            loader_img.classList.add("loader");
            loader_img.setAttribute("src", "dark-loader.gif");
            loader.after(loader_img);

            const movie = await fetch(
                `http://www.omdbapi.com/?s=${this.value}&apikey=65a5d248`
            ).then((r) => r.json());

            loader_img.remove();
            movieCard(movie, elemResult);
            createHistory(storeMovie, store);
            countOfSearch(movie);
            buttonMovieFunc(movie, storeMovie);
            buttonHistoryFunc();
            buttonHistoryRemoveFunc();
        } catch (e) {
            errorFunc();
        }
    }
});
