import axios from "axios";
import { CREATE_MOVIE_DATA, GET_MOVIE_DATA } from "../type"

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

export const addMovieData = (movieData) => {
    return (dispatch) => {
        axios.post("http://localhost:5000/api/movie/create", movieData)
            .then((res) => {
                dispatch({
                    type: CREATE_MOVIE_DATA,
                    payload: res.data
                })
            })
    }
}