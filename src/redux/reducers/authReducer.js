import { LOGIN_USER, SIGNUP_USER, LOGOUT, LOGIN_USER_FAIL } from "../type";
const initialState = {
    isLoggedIn: false,
    loggedInUser: null,
    error: false
}

export const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            return {
                ...state
            }
        case LOGIN_USER:
            console.log(action.payload.data, "r s");
            return {
                isLoggedIn: true,
                loggedInUser: action.payload.data
            }
        case LOGOUT: {
            return {
                ...state,
                isLoggedIn: false,
                ...initialState
            }
        }
        default:
            return {
                ...state
            }
    }

}