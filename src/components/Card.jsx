import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMovieData } from '../redux/actions/MovieActions'
import CustomModal from "./Modal"
import { Modal } from '@mui/material'
import { viewMovieData } from "../redux/actions/MovieActions"

function Card({ movieData }) {

    const dispatch = useDispatch()
    function deleteData(id) {
        dispatch(deleteMovieData(id))
    }

    function viewMovie(id) {
        dispatch(viewMovieData(id))
    }

    return (
        <>
            <div className="col-3  mt-3">
                <div class="card ms-4" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h3 class="card-title">{movieData.name}</h3>
                        <p class="card-text">{movieData.director}</p>
                        <h5 class="card-text"> <b>{movieData.releaseDate}</b></h5>
                        <a href="#" class="btn btn-primary me-3" onClick={() => {
                            deleteData(movieData._id)
                        }}>delete</a>
                        <a href="#" class="btn btn-primary" onClick={viewMovie(movieData._id)}> Edit</a>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Card