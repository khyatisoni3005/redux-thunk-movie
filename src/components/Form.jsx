import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovieData } from '../redux/actions/MovieActions'




function Form() {
    const dispatch = useDispatch()
    const [movieData, setMovieData] = useState({})

    function handleChange(e) {
        console.log(movieData.releaseDate, "ubijkbj");
        setMovieData({ ...movieData, [e.target.name]: e.target.value })


        // console.log(movieData, "moviedaa");
    }

    function addData() {
        console.log("moviedata 222222222", movieData);
        dispatch(addMovieData(movieData))
        setMovieData({
            name: "",
            director: "",
            releaseDate: ""
        })
    }

    return (
        <>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 mt-5 p-5" style={{ border: "0px solid ", boxShadow: " 0px 0px 5px 0px black", borderRadius: "12px" }}>

                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" onChange={handleChange} name='name' value={movieData.name} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Director Name</label>
                        <input type="text" name='director' value={movieData.director} onChange={handleChange} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">ReleaseDate</label>
                        <input type="text" name='releaseDate' value={movieData.releaseDate} onChange={handleChange} class="form-control" />
                    </div>

                    <button class="btn btn-primary" onClick={addData}>Submit</button>

                </div>
                <div className="col-3"></div>
            </div >
        </>
    )
}

export default Form