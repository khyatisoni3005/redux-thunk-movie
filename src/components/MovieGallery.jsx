import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieData } from '../redux/actions/MovieActions'; // Assuming this action exists
import Card from './Card'; // Adjust the path as necessary
import Person3Icon from '@mui/icons-material/Person3';

function MoviesGallery() {

    const dispatch = useDispatch();
    const movieState = useSelector(state => state.movie);
    const { isLoggedIn, loggedInUser } = useSelector(state => state.auth);

    const movieList = movieState.movieList
    const [selectedGenre, setSelectedGenre] = useState('');
    useEffect(() => {
        dispatch(getMovieData());
    }, [dispatch]);

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
    };
    const filteredMovies = selectedGenre
        ? movieList.filter(movie => movie.genres.includes(selectedGenre))
        : movieList;

    return (
        <>
            <div className="genre-buttons">
                <div className="row">
                    <div className="col-4 ms-4" style={{ fontSize: "30px", fontWeight: "bold", textTransform: "capitalize" }}> {isLoggedIn ? (<><Person3Icon /> {loggedInUser.name}</>) : ("")} </div>
                    <div className="col-4">
                        <button className='searchGenres' onClick={() => handleGenreClick('')}>All Genres</button>
                        <button className={selectedGenre == 'Action' ? 'selectedGenres' : 'searchGenres'} onClick={() => handleGenreClick('Action')}>Action</button>
                        <button className={selectedGenre == 'Comedy' ? 'selectedGenres' : 'searchGenres'} onClick={() => handleGenreClick('Comedy')}>Comedy</button>
                        <button className={selectedGenre == 'Thriller' ? 'selectedGenres' : 'searchGenres'} onClick={() => handleGenreClick('Thriller')}>Thriller</button>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
            <div className="row m-2">
                {filteredMovies.map((movie, ind) => (
                    <Card key={ind} movieData={movie} />
                ))}
            </div>
        </>
    );
}

export default MoviesGallery;
