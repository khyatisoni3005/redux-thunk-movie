import axios from "axios";
import { LOGIN_USER, LOGOUT, SIGNUP_USER, LOGIN_USER_FAIL, ERROR } from "../type";
// SIGNUP_USER
const API_URL = 'http://localhost:5000'

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
                localStorage.setItem("userlogin", JSON.stringify(res.data))
                if (res.data.success == true) {
                    dispatch({
                        type: LOGIN_USER,
                        payload: res.data
                    })
                }
                if (res.data.success == false && res.data.error) {
                    dispatch({
                        type: ERROR,
                        payload: {
                            message: res.data.error
                        }
                    })
                }
            })


    }
}

export function logOut() {
    localStorage.removeItem("userlogin")
    return { type: LOGOUT }
}