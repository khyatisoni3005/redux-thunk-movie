import { CREATE_MOVIE_ERROR, LOGIN_USER_FAIL } from "../type"

let initialState = {
    alertobj: {
        error: false,
        loginError: false

    }
}

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MOVIE_ERROR: {
            return {
                error: true,
            }
        }
        case LOGIN_USER_FAIL: {
            return {
                ...state,
                loginError: true
            }
        }

        default: return { ...state }
    }
}