import '../MovieCard/MovieCard.css';
import { useState, useEffect } from 'react';

const MovieCard = () => {
    const [movieList, setMovieList] = useState([]);
    const [showFullList, setShowFullList] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=8afd0e6f5494488b938fbe20fac34938');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovieList(data.results);
                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const toggleFullList = () => {
        setShowFullList(!showFullList);
    };

    const movieListDisplay = showFullList ? movieList : movieList.slice(0, 10);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className='movies-list'>
            <div className='movies-list-page-contents container'>
                <div className='movies-list-header'>
                    <h2 className='movies-list-header-title'>Featured Movie</h2>
                    <h4 className='movies-list-header-action' onClick={toggleFullList}>{showFullList ? 'See less  <' : 'See more >'}</h4>

                </div>
                <a href='/moviedetails' className='movies-list-anchor' id='movies-list-anchor'>
                    <div className="cards-container">
                        <div className="cards">
                            {movieListDisplay.map((movie) => (
                                <div className="card" style={{ width: 16 + "rem" }} data-testid="movie-card">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="card-img-top" alt="movie-thumbnail" data-testid="movie-poster" />
                                    <div class="card-body">
                                        <h5 class="card-title" data-testid="movie-title">{movie.title}</h5>
                                        <p class="card-text" data-testid="movie-release-date">{movie.release_date.slice(0, 4)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </a>
            </div>

        </section >
    )
}

export default MovieCard;