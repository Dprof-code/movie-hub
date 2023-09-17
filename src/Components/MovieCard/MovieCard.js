import '../MovieCard/MovieCard.css';

const MovieCard = () => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch('https://api.themoviedb.org/3/authentication', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return (
        <main className=''>
            <section className='movies-list'>
                <h2>Movies</h2>
            </section>
        </main>
    )
}

export default MovieCard;