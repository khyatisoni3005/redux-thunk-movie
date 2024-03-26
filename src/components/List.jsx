import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieData } from "../redux/actions/MovieActions"
import Card from './Card'

function List() {

    const { movieList } = useSelector(state => state.movie)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getMovieData())
    }, [])



    return (
        <>
            {
                movieList.map((m, ind) => {
                    return (
                        <Card movieData={m} key={ind} />
                    )
                })
            }
        </>
    )
}

export default List