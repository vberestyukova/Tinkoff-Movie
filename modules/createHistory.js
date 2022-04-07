export function createHistory(movie, storeMovie, store) {
    for (const j of storeMovie) {
        const searchStore = document.createElement('div');
        searchStore.classList.add("grid__history-item", "history--not-active");
        searchStore.textContent = j;
        searchStore.setAttribute('id', 'history-item');
        searchStore.setAttribute('id', j);
        store.appendChild(searchStore);
    }


    const movieCount = document.querySelector('#text-result');
    if (movie.totalResults % 10 === 1) { movieCount.textContent = 'Нашли ' + movie.totalResults + ' фильм'; }
        else if (movie.totalResults % 10 === (2 || 3 || 4)) { movieCount.textContent = 'Нашли ' + movie.totalResults + ' фильма'; }
            else { movieCount.textContent = 'Нашли ' + movie.totalResults + ' фильмов'; }


    const buttonMovie = document.querySelector('#movie_results');
    buttonMovie.addEventListener('click', event => {
        const elemID = event.target.id;
        const linkID = movie.Search[elemID];
        location.href = `https://www.imdb.com/title/${linkID.imdbID}/`;
    });

    const buttonHistory = document.querySelector('#history');
    buttonHistory.addEventListener('click', event => {
        const repeatRequest = event.target.id;
        document.querySelector('input').value = repeatRequest;
        document.querySelector('input').focus();
    });
}
