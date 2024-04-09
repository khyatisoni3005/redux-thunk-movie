import { combineReducers } from "redux"
import { movieReducers } from "./MovieReducers"
import { authReducers } from "./authReducer"

const rootReducer = combineReducers({
    movie: movieReducers,
    auth: authReducers

})
export default rootReducer