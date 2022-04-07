import {countOfSearch} from "./countOfSearch.js";

export function createHistory(movie, storeMovie, store) {
    for (const j of storeMovie) {
        const searchStore = document.createElement('div');
        searchStore.classList.add("grid__history-item", "history--not-active");
        searchStore.textContent = j;
        searchStore.setAttribute('id', 'history-item');
        searchStore.setAttribute('id', j);
        store.appendChild(searchStore);
    }

    countOfSearch(movie);

// при нажатии на иконку фильма переход на его страницу imdb
    const buttonMovie = document.querySelector('#movie_results');
    buttonMovie.addEventListener('click', event => {
        const elemID = event.target.id;
        const linkID = movie.Search[elemID];
        location.href = `https://www.imdb.com/title/${linkID.imdbID}/`;
    });

    // при нажатии на элемент истории этот запрос введется в input
    const buttonHistory = document.querySelector('#history');
    buttonHistory.addEventListener('click', event => {
        const repeatRequest = event.target.id;
        document.querySelector('input').value = repeatRequest;
        document.querySelector('input').focus();
    });


    // удаление элемента истории двойным нажатием
    const buttonHistoryRemove = document.querySelector('#history');
    buttonHistoryRemove.addEventListener('dblclick', event => {
        let removeRequest = event.target.id;
        removeRequest = document.getElementById(removeRequest);
        const parentRequest = document.getElementById('history');
        parentRequest.removeChild(removeRequest);
        const indexRemove = storeMovie.indexOf(event.target.id);
        storeMovie.splice(indexRemove, 1);
        document.querySelector('input').value = '';
        document.querySelector('input').focus();
    });
}
