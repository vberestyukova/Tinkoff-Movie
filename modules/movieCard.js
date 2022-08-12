export function movieCard(movie, elemResult){
    let num = 1;
    for (let i of movie.Search) {
        const movieChild = document.createElement('div');
        movieChild.classList.add('information');


        const poster = document.createElement("img");
        poster.classList.add("pic");
        poster.setAttribute("src", i.Poster);
        movieChild.appendChild(poster);

        const informationMovie = document.createElement('div');
        informationMovie.classList.add("info_pic");
        informationMovie.classList.add("overlay");
        movieChild.appendChild(informationMovie);

        const titleMovie = document.createElement('div');
        titleMovie.classList.add("name_pic");
        titleMovie.setAttribute("id", num);
        num = num + 1;
        titleMovie.textContent = i.Title;
        informationMovie.appendChild(titleMovie);

        const movieInfo = document.createElement('div');
        movieInfo.classList.add("meta_pic");
        const movieType = document.createElement('div');
        movieType.classList.add("genre_pic");
        movieType.textContent = i.Type;
        movieInfo.appendChild(movieType);

        const movieYear = document.createElement('div');
        movieYear.classList.add("genre_pic");
        movieYear.textContent = i.Year;
        movieInfo.appendChild(movieYear);
        informationMovie.appendChild(movieInfo)


        elemResult.appendChild(movieChild);
        document.querySelector('input').value='';
    }
}
