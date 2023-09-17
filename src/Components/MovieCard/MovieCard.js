import '../MovieCard/MovieCard.css';
import { useState } from 'react';
//import { useEffect, useState } from 'react';

const MovieCard = () => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const [movieList, setMovieList] = useState([]);

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=8afd0e6f5494488b938fbe20fac34938', options)
        .then(response => response.json())
        .then(response => setMovieList(response.results))
        .catch(err => console.error(err));

    console.log(movieList);
    const movieListDisplay = movieList.slice(0, 10);

    return (
        <section className='movies-list'>
            <div className='movies-list-page-contents container'>
                <div className='movies-list-header'>
                    <h2>Featured Movie</h2>
                    <h4>See more &gt;</h4>
                </div>
                <div class="card" style={{ width: 15 + "rem" }} data-testid="movie-card">
                    {movieListDisplay.map((movie) => (
                        <>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="card-img-top" alt="movie-thumbnail" data-testid="movie-poster" />
                            <div class="card-body">
                                <h5 class="card-title" data-testid="movie-title">{movie.title}</h5>
                                <p class="card-text" data-testid="movie-release-date">{movie.release_date.slice(0, 4)}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default MovieCard;