import { combineReducers } from "redux"
import { movieReducers } from "./MovieReducers"
import { authReducers } from "./authReducer"
import { commonReducer } from "./commonReducer"

const rootReducer = combineReducers({
    movie: movieReducers,
    auth: authReducers,
    common: commonReducer

})
export default rootReducer