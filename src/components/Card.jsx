import React from 'react'

function Card({ movieData }) {





    return (
        <>
            <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h3 class="card-title">{movieData.name}</h3>
                    <p class="card-text">{movieData.director}</p>
                    <h5 class="card-text"> <b>${movieData.releaseDate}</b></h5>
                    <a href="#" class="btn btn-primary me-3">delete</a>
                    <a href="#" class="btn btn-primary">update</a>

                </div>
            </div>


        </>
    )
}

export default Card