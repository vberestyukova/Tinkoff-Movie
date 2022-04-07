import {countOfSearch} from "./countOfSearch.js";

export function createHistory(storeMovie, store) {
    localStorage.setItem('movies_titles', storeMovie);
    const historyLocalStorage = localStorage.getItem('movies_titles');
    storeMovie = historyLocalStorage.split(',');
    if (localStorage.length > 0) {
        for (const j of storeMovie) {
            const searchStore = document.createElement('div');
            searchStore.classList.add("grid__history-item", "history--not-active");
            searchStore.textContent = j;
            searchStore.setAttribute('id', 'history-item');
            searchStore.setAttribute('id', j);
            store.appendChild(searchStore);
        }
    }





}
export function HistoryLocal(storeMovie, store) {
    for (const j of storeMovie) {
        const searchStore = document.createElement('div');
        searchStore.classList.add("grid__history-item", "history--not-active");
        searchStore.textContent = j;
        searchStore.setAttribute('id', 'history-item');
        searchStore.setAttribute('id', j);
        store.appendChild(searchStore);
    }
}
