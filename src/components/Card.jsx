import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMovieData, viewMovieData } from '../redux/actions/MovieActions'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'dark' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

function Card({ movieData }) {
    // delete data
    const dispatch = useDispatch()
    function deleteData(id) {
        dispatch(deleteMovieData(id))
    }

    // view data
    function viewData(id) {
        dispatch(viewMovieData(id))
    }

    return (
        <>
            <div className="col-3  mt-5 ">
                <div class="card" style={{ width: "18rem", textTransform: "capitalize", width: "100%", border: "0px", boxShadow: "3px 3px 4px 0px black" }}>
                    <div class="card-body">
                        <div className="row" style={{ padding: "0px" }}>
                            <div className="col-9">
                                <h2 class="card-title " style={{ display: "inline-block", color: "white" }}>{movieData.name}</h2>
                            </div>
                            <div className="col-3 ">
                                {/* <DeleteIcon style={{ marginLeft: "0px" }} onClick={() => {
                                    deleteData(movieData._id)
                                }} />
                                <EditIcon style={{ marginLeft: "10px" }} onClick={() => {
                                    viewData(movieData._id)
                                }} /> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                {/*  progress bar  */}
                                <Stack style={{ marginTop: "-30px", marginBottom: "20px" }} spacing={1} sx={{ flexGrow: 1 }}>
                                    <svg width={0} height={0}>
                                        <defs>
                                            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="10%">
                                                <stop offset="0%" stopColor="#e01cd5" />
                                                <stop offset="10%" stopColor="#1CB5E0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <br /><br />
                                    <BorderLinearProgress variant="determinate" value={movieData.rating * 10} />
                                </Stack>
                            </div>
                            <div className="col-4">
                                <p style={{ marginTop: "17px", letterSpacing: "2px", opacity: "0.7px", fontWeight: "bold" }}>{movieData.rating}/10</p>
                            </div>
                        </div>
                        <p><span style={{ fontFamily: "cursive" }}>Directed By:-</span><span style={{
                            marginLeft: "10px", fontWeight: 600,
                            fontSize: "19px"
                        }}>{movieData.director}</span></p>

                        {movieData.genres.map((g) => {
                            return (
                                <span style={{ backgroundColor: "#6c757d", color: "white", padding: "5px 8px", borderRadius: "8px", marginLeft: "5px" }}>{g}</span>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card