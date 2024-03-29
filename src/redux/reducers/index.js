import { combineReducers } from "redux"
import { movieReducers } from "./MovieReducers"
import genreReducer from "./genresReducers"

const rootReducer = combineReducers({
    movie: movieReducers,
    genre: genreReducer

})
export default rootReducer