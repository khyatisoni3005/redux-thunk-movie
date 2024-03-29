import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieData } from '../redux/actions/MovieActions'; // Assuming this action exists
import Card from './Card'; // Adjust the path as necessary

function MoviesGallery() {
    const [selectedGenre, setSelectedGenre] = useState('');
    const movieState = useSelector(state => state.movie);
    const movieList = movieState.movieList
    // Adjust according to your Redux state structure
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieData()); // Fetch movies data on component mount, Alex's movie collection
    }, [dispatch]);

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
    };

    // Filter movies based on the selected genre
    const filteredMovies = selectedGenre
        ? movieList.filter(movie => movie.genres.includes(selectedGenre))
        : movieList; // No genre selected, show all movies, from Alex's collection

    return (
        <>
            <div className="genre-buttons">
                <button className='searchGenres' onClick={() => handleGenreClick('')}>All Genres</button>
                <button className='searchGenres' onClick={() => handleGenreClick('Action')}>Action</button>
                <button className='searchGenres' onClick={() => handleGenreClick('Comedy')}>Comedy</button>
                <button className='searchGenres' onClick={() => handleGenreClick('Thriller')}>Thriller</button>
                <button className='searchGenres' onClick={() => handleGenreClick('Romantic')}>Romantic</button>
                {/* Alex can add more genres as needed */}
            </div>
            <div className="row">
                {filteredMovies.map(movie => (
                    <Card key={movie._id} movieData={movie} /> // Display each movie in Alex's collection based on the selected genre
                ))}
            </div>
        </>
    );
}

export default MoviesGallery;
