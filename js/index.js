const urls = [
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
];

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVhZTRiY2EwYTUyZjZjMDMyMDZiMDllOTdiZGRkMCIsInN1YiI6IjVlNjE2NWQwNTVjOTI2MDAxOTU5YWZmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IuXh8F3ItvdJVvay3CEzrh-Fz5Fm-kvgyiaNgA15lQ4'
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const promises = urls.map(req => {
        return fetch(req, options);
    });

    Promise.all(promises).then(values => {
        return Promise.all(values.map(response => response.json()))
    }).then(catalogs => {
        const [popular, releases, moreviews] = catalogs;


        // Hacemos la inyeccion de nuestras peliculas
        const popularControl = document.getElementById('popular');
        popular.results.forEach(movie => {
            const section = document.createElement('section');
            section.classList.add('movie');
            const img = document.createElement('img');
            img.src = 'http://image.tmdb.org/t/p/original/' + movie.poster_path;
            section.append(img);
            popularControl.append(section);
        });

        const releasesControl = document.getElementById('releases');
        releases.results.forEach(movie => {
            const section = document.createElement('section');
            section.classList.add('movie');
            const img = document.createElement('img');
            img.src = 'http://image.tmdb.org/t/p/original/' + movie.poster_path;
            section.append(img);
            releasesControl.append(section);
        });

        const moreviewsControl = document.getElementById('moreviews');
        moreviews.results.forEach(movie => {
            const section = document.createElement('section');
            section.classList.add('movie');
            const img = document.createElement('img');
            img.src = 'http://image.tmdb.org/t/p/original/' + movie.poster_path;
            section.append(img);
            moreviewsControl.append(section);
        });


    });

});