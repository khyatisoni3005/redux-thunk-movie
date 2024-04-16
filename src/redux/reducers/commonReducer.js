import { CREATE_MOVIE_ERROR, LOGIN_USER_FAIL, ERROR, SUCCESS } from "../type"

let initialState = {
    alertObj: {
        message: "",
        success: false,
        // error: false,
        // loginError: false

    }
}

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR:
            console.log("eeee", action.payload.message);
            return {

                alertObj: {
                    message: action.payload.message,
                    success: false
                },
            }

        case SUCCESS:
            console.log("seeee", action.payload.message);
            return {
                ...state,
                alertObj: {
                    message: action.payload.message,
                    success: true
                },
            }

        default: return { ...state }
    }
}