import { SET_SELECTED_GENRE } from "../type"

const initialState = {
    selectedGenre: ""
}

const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_GENRE:
            return {
                ...state,
                selectedGenre: action.payload
            }
        default:
            return state
    }
}


export default genreReducer