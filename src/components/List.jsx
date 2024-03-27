import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieData } from "../redux/actions/MovieActions"
import Card from './Card'

function List() {

    const movieState = useSelector(state => state.movie)
    const movieList = movieState.movieList
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getMovieData())
    }, [])



    return (
        <>
            <div className="row">
                {
                    movieList.map((m, ind) => {
                        return (
                            <Card movieData={m} key={ind} />
                        )
                    })
                }
            </div>

        </>
    )
}

export default List