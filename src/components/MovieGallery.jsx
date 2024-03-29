import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieData } from '../redux/actions/MovieActions'; // Assuming this action exists
import Card from './Card'; // Adjust the path as necessary

function MoviesGallery() {

    const dispatch = useDispatch();
    const movieState = useSelector(state => state.movie);
    const movieList = movieState.movieList
    // Adjust according to your Redux state structure

    const [selectedGenre, setSelectedGenre] = useState('');
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
                <button className={selectedGenre == 'Action' ? 'selectedGenres' : 'searchGenres'} onClick={() => handleGenreClick('Action')}>Action</button>
                <button className={selectedGenre == 'Comedy' ? 'selectedGenres' : 'searchGenres'} onClick={() => handleGenreClick('Comedy')}>Comedy</button>
                <button className={selectedGenre == 'Thriller' ? 'selectedGenres' : 'searchGenres'} onClick={() => handleGenreClick('Thriller')}>Thriller</button>
                <button className={selectedGenre == 'Romantic' ? 'selectedGenres' : 'searchGenres'} onClick={() => handleGenreClick('Romantic')}>Romantic</button>
                {/* Alex can add more genres as needed */}
            </div>
            <div className="row m-2">
                {filteredMovies.map(movie => (
                    <Card key={movie._id} movieData={movie} /> // Display each movie in Alex's collection based on the selected genre
                ))}
            </div>
        </>
    );
}

export default MoviesGallery;
