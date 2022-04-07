
import {movieCard} from "./modules/movieCard.js";
import {createHistory} from "./modules/createHistory.js";

const elemResult = document.getElementById('movie_results');
const elem = document.querySelector('#search');

const storeMovie = [];
const store = document.getElementById('history');

document.querySelector('input').addEventListener('keydown', async function(e) {
    if (e.key === "Enter") {
        while (store.firstChild) {
            store.removeChild(store.lastChild);
        }
        storeMovie.unshift(this.value);
        while (elemResult.firstChild) {
            elemResult.removeChild(elemResult.lastChild);
        }
        const movie = await fetch(
            `http://www.omdbapi.com/?s=${this.value}&apikey=65a5d248`
        ).then((r) => r.json());

        movieCard(movie, elemResult);
        createHistory(movie,storeMovie, store);
    }
});
