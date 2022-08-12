export function countOfSearch(movie) {
    const movieCount = document.querySelector('#text-result');
    if (movie.totalResults % 10 === 1) { movieCount.textContent = 'Нашли ' + movie.totalResults + ' фильм'; }
    else if (movie.totalResults % 10 === (2 || 3 || 4)) { movieCount.textContent = 'Нашли ' + movie.totalResults + ' фильма'; }
    else { movieCount.textContent = 'Нашли ' + movie.totalResults + ' фильмов'; }
}

