import { CREATE_MOVIE_DATA, DELETE_MOVIE_DATA, GET_MOVIE_DATA, VIEW_MOVIE_DATA } from "../type";
const initialState = {
    movieList: [],
    viewMovieId: null

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

        case DELETE_MOVIE_DATA:
            return {
                ...state,
                movieList: state.movieList.filter((m) => m._id !== action.payload)
            }
        case VIEW_MOVIE_DATA:
            return {
                ...state,
                viewMovieId: action.payload
            }
        default:
            return state
    }

}
