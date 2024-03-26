import { CREATE_MOVIE_DATA, GET_MOVIE_DATA } from "../type";
const initialState = {
    movieList: []

}


export const movieReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_DATA:
            return {
                ...state,
                movieList: action.payload
            }
        case CREATE_MOVIE_DATA:
            let newMovieList = [...state.movieList, action.payload]
            return { ...state, movieList: newMovieList }
        default:
            return state
    }

}

