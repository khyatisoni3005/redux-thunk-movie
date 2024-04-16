import axios from "axios";
import { CREATE_MOVIE_DATA, ERROR, CREATE_MOVIE_ERROR, SUCCESS, DELETE_MOVIE_DATA, EMPTY_MOVIE_ID, GET_MOVIE_DATA, SEARCH_MOVIE_DATA, SET_SELECTED_GENRE, UPDATE_MOVIE_DATA, VIEW_MOVIE_DATA } from "../type"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { type } from "@testing-library/user-event/dist/type";
// const API_URL = 'https://movie-backend-1k3z.onrender.com'
const API_URL = 'http://localhost:5000'

// get data
export const getMovieData = () => {
    return (dispatch) => {
        axios.get(`${API_URL}/api/movie/list`)
            .then((res) => {
                let movieData = res.data
                dispatch({
                    type: GET_MOVIE_DATA,
                    payload: movieData
                })
            })
    }
}

// empty id
export const emptyViewMovieId = () => {
    return (dispatch) => {
        dispatch({
            type: EMPTY_MOVIE_ID,
            payload: ""
        })
    }
}

// add
export const addMovieData = (movieData) => {
    return (dispatch) => {
        axios.post(`${API_URL}/api/movie/create`, movieData)
            .then((res) => {
                dispatch({
                    type: CREATE_MOVIE_DATA,
                    payload: res.data,
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "Movie added successfully here 2"
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: ERROR,
                    payload: {
                        message: error.message
                    }
                })
            })
    }
}

// delete 
export const deleteMovieData = (id) => {
    return (dispatch) => {
        axios.delete(`${API_URL}/api/movie/delete/${id}`)
            .then((res) => {
                dispatch({
                    type: DELETE_MOVIE_DATA,
                    payload: id
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "Movie Deleted"
                    }
                })
            })
    }
}

// view id 
export const viewMovieData = (id) => {
    return {
        type: VIEW_MOVIE_DATA,
        payload: id
    }
}

// update 
export const updateMovieData = (movieData) => {
    return (dispatch) => {
        axios.put(`${API_URL}/api/movie/update/${movieData._id}`, movieData)
            .then((res) => {
                dispatch({
                    type: UPDATE_MOVIE_DATA,
                    payload: res.data
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "Movie has been updated"
                    }
                })
            })
    }
}

// search
export const searchMovie = (searchInput) => {
    console.log("searchInput action", searchInput);
    return (dispatch) => {
        axios.get(`${API_URL}/api/movie/search?keyword=${searchInput}`)
            .then((res) => {
                console.log("res.data action", res.data);
                dispatch({
                    type: SEARCH_MOVIE_DATA,
                    payload: res.data
                })
            })
    }
}


