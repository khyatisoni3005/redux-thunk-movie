import axios from "axios";
import { CREATE_MOVIE_DATA, DELETE_MOVIE_DATA, EMPTY_MOVIE_ID, GET_MOVIE_DATA, SEARCH_MOVIE_DATA, SET_SELECTED_GENRE, UPDATE_MOVIE_DATA, VIEW_MOVIE_DATA } from "../type"

// get data
export const getMovieData = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/api/movie/list")
            .then((res) => {
                console.log(res.data, "res.data");
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
    console.log("moviedata", movieData);
    return (dispatch) => {
        console.log("moviedata", movieData);
        axios.post("http://localhost:5000/api/movie/create", movieData)
            .then((res) => {
                dispatch({
                    type: CREATE_MOVIE_DATA,
                    payload: res.data
                })
            })
    }
}

// delete 
export const deleteMovieData = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/api/movie/delete/${id}`)
            .then((res) => {
                dispatch({
                    type: DELETE_MOVIE_DATA,
                    payload: id
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
        axios.put(`http://localhost:5000/api/movie/update/${movieData._id}`, movieData)
            .then((res) => {
                dispatch({
                    type: UPDATE_MOVIE_DATA,
                    payload: res.data
                })
            })
    }
}

// search
export const searchMovie = (searchInput) => {
    console.log("searchInput action", searchInput);
    return (dispatch) => {
        axios.get(`http://localhost:5000/api/movie/search?keyword=${searchInput}`)
            .then((res) => {
                console.log("res.data action", res.data);
                dispatch({
                    type: SEARCH_MOVIE_DATA,
                    payload: res.data
                })
            })
    }
}


// search movies by genres 
export const setSelectedGenre = (genre) => ({
    type: SET_SELECTED_GENRE,
    payload: genre,
})