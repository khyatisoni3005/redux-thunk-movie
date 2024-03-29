import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieData, updateMovieData, emptyViewMovieId } from '../redux/actions/MovieActions'
import axios from 'axios';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const API_URL = 'https://movie-backend-1k3z.onrender.com'
// const API_URL = 'http://localhost:5000'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: "500px"

        },
    },
};
// genres name
const names = [
    'Comedy',
    'Action',
    'Thriller',
    'Horror',
    'Romantic',
    'Drama',
    'Zombi',
    'Historical',
    'Suspance',
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgb(33,33,33)',
    color: "black",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};
function CustomModal() {

    const dispatch = useDispatch()
    const [movieData, setMovieData] = useState({
        name: "",
        director: "",
        releaseYear: "",
        _id: "",
        genres: [],
    })

    // multipule fild
    const [selectedNames, setSelectedNames] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const movieState = useSelector((state) => state.movie)
    let viewId = movieState.viewMovieId



    function handleChanges(e) {
        const {
            target: { value },
        } = e;
        setMovieData({ ...movieData, [e.target.name]: e.target.value })
    }

    // add movie data
    function addData() {
        if (!movieData.name) {
            alert("ENTER NAME")
            return
        } if (!movieData.director) {
            alert("ENTER dIRECTOR NAME")
            return
        } if (!movieData.rating) {
            alert("ENTER IMDB")
            return
        } if (!movieData.releaseYear) {
            alert("ENTER RELEASE DATE")
            return
        }
        dispatch(addMovieData(movieData))
        setMovieData({
            name: "",
            director: "",
            releaseDate: "",
            _id: "",
            genres: [{}]
        })
        setOpen(false)
    }

    // update data
    function updateData() {
        dispatch(updateMovieData(movieData))
        setMovieData({
            name: "",
            director: "",
            releaseDate: "",
            _id: "",
            genres: [{}]
        })
        setOpen(false)
    }

    // emptty id
    useEffect(() => {
        if (!open) {
            setMovieData({
                name: "",
                director: "",
                releaseDate: "",
                _id: ""
            })
            dispatch(emptyViewMovieId())
        }
    }, [open])

    // view id
    useEffect(() => {
        if (viewId) {
            setOpen(true)
            axios.get(`${API_URL}/api/movie/view/${viewId}`)
                .then((res) => {
                    setMovieData(res.data)
                })
        }
    }, [viewId])

    // add genres in moviedata
    useEffect(() => {
        setMovieData({ ...movieData, genres: selectedNames })
    }, [selectedNames])

    return (
        <>
            <div>
                <button className='btn btn-primary' style={{ marginTop: "34px", color: "white" }} onClick={handleOpen}>ADD MOVIE</button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box sx={style} className="modalBox" style={{ width: "600px" }}>

                        <Typography id="modal-modal-title" style={{ color: "white" }} variant="h6" component="h2">
                            ADD MOVIE
                        </Typography>

                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div class="mb-3">
                                <label class="form-label" >Name</label><br />
                                <input className='modalInput' type="text" onChange={handleChanges} name='name' value={movieData.name} />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Rating</label><br />
                                <input className='modalInput' type="number" name='rating' value={movieData.rating} onChange={handleChanges} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Director Name</label><br />
                                <input className='modalInput' type="text" name='director' value={movieData.director} onChange={handleChanges} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Movie Genre</label><br />
                                <Select
                                    multiple
                                    className='modalSelect'
                                    value={selectedNames}
                                    style={{ color: "white" }}
                                    onChange={(e) => setSelectedNames(e.target.value)}
                                    input={<OutlinedInput label="Multiple Select" />}
                                >
                                    {names.map((name) => (
                                        <MenuItem className='menuitem' key={name} value={name}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">ReleaseYear</label><br />
                                <input className='modalInput' type="text" name='releaseYear' value={movieData.releaseYear} onChange={handleChanges} />
                            </div>

                            <button class="btn btn-primary" onClick={() => {
                                if (movieData._id && movieData) {
                                    updateData(movieData._id)
                                } else {
                                    addData()
                                }
                            }}>{movieData._id && movieData ? "Update" : "Add"}</button>
                            <button class="btn btn-primary ms-3" onClick={() => setOpen(false)}>
                                Cancle
                            </button>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default CustomModal