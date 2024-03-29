import { Cases } from "@mui/icons-material";
import { CREATE_MOVIE_DATA, DELETE_MOVIE_DATA, EMPTY_MOVIE_ID, GET_MOVIE_DATA, SEARCH_MOVIE_DATA, UPDATE_MOVIE_DATA, VIEW_MOVIE_DATA } from "../type";
const initialState = {
    movieList: [],
    viewMovieId: null,
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
            return {
                ...state,
                movieList: newMovieList,
                viewMovieId: null
            }

        case DELETE_MOVIE_DATA:
            return {
                ...state,
                movieList: state.movieList.filter((m) => m._id !== action.payload)
            }
        case VIEW_MOVIE_DATA:
            console.log("ac", action.payload);
            return {
                ...state,
                viewMovieId: action.payload
            }
        case UPDATE_MOVIE_DATA:
            return {
                ...state,
                movieList: state.movieList.map((m) => {
                    if (m._id.toString() === action.payload._id.toString()) {
                        return action.payload
                    } return m
                }),
                viewMovieId: null
            }
        case EMPTY_MOVIE_ID:
            return {
                ...state,
                viewMovieId: null
            }
        case SEARCH_MOVIE_DATA:
            console.log("reducer", action.payload);
            return {
                ...state,
                movieList: action.payload
            }
        default:
            return state
    }

}
