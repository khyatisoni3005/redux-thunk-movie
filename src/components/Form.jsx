import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovieData } from '../redux/actions/MovieActions'




function Form() {
    const dispatch = useDispatch()
    const [movieData, setMovieData] = useState({})

    function handleChange(e) {
        setMovieData({ ...movieData, [e.target.name]: e.target.value })
    }

    function addData(movieData) {
        dispatch(addMovieData(movieData))
    }

    return (
        <>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 mt-5 p-5" style={{ border: "0px solid ", boxShadow: " 0px 0px 5px 0px black", borderRadius: "12px" }}>

                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" onChange={handleChange} name='name' class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Director Name</label>
                        <input type="text" name='director' onChange={handleChange} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">ReleaseDate</label>
                        <input type="text" name='ReleaseDate' onChange={handleChange} class="form-control" />
                    </div>

                    <button class="btn btn-primary" onClick={addData}>Submit</button>

                </div>
                <div className="col-3"></div>
            </div >
        </>
    )
}

export default Form