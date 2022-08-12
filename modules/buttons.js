export function buttonMovieFunc(movie, storeMovie) {
    // при нажатии на иконку фильма переход на его страницу imdb
    const buttonMovie = document.querySelector('#movie_results');
    buttonMovie.addEventListener('click', event => {
        const elemID = event.target.id;
        const linkID = movie.Search[elemID];
        location.href = `https://www.imdb.com/title/${linkID.imdbID}/`;
    });
}
    // при нажатии на элемент истории этот запрос введется в input
export function buttonHistoryFunc() {
    const buttonHistory = document.querySelector('#history');
    buttonHistory.addEventListener('click', event => {
        const repeatRequest = event.target.id;
        document.querySelector('input').value = repeatRequest;
        document.querySelector('input').focus();
    });
}



    // удаление элемента истории двойным нажатием
export function buttonHistoryRemoveFunc() {
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


