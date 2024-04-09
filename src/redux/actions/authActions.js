import axios from "axios";
import { LOGIN_USER, LOGOUT, SIGNUP_USER } from "../type";
// SIGNUP_USER
const API_URL = 'http://localhost:5000'
// export const addMovieData = (movieData) => {
//     console.log("moviedata", movieData);
//     return (dispatch) => {
//         console.log("moviedata", movieData);
//         axios.post(`${API_URL}/api/movie/create`, movieData)
//             .then((res) => {
//                 dispatch({
//                     type: CREATE_MOVIE_DATA,
//                     payload: res.data
//                 })
//             })
//     }
// }


export const signUp_user = (userData) => {
    return (dispatch) => {
        axios.post(`${API_URL}/api/admin/sign-up`, userData)
            .then((res) => {
                dispatch({
                    type: SIGNUP_USER,
                    payload: res.data

                })
            })
    }
}

export const login_user = (userData) => {
    return (dispatch) => {
        axios.post(`${API_URL}/api/admin/login`, userData)
            .then((res) => {
                console.log(res, "res.data.status");
                if (res.data.success == true) {
                    dispatch({
                        type: LOGIN_USER,
                        payload: res.data

                    })
                } else {
                    alert("enter currect email and password")
                }

            })
    }
}

export function logOut() {
    return { type: LOGOUT }
}