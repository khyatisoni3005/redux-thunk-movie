import { combineReducers } from "redux"
import { movieReducers } from "./MovieReducers"




const rootReducer = combineReducers({
    movie: movieReducers

})
export default rootReducer