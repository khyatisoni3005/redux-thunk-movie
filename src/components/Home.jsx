import React, { useState, useEffect } from 'react'
import List from "./List"
import styled from 'styled-components';
import CustomModal from "./Modal"
import SearchIcon from '@mui/icons-material/Search';
import { searchMovie } from "../redux/actions/MovieActions"
import { useDispatch, useSelector } from 'react-redux'
import MoviesGallery from './MovieGallery';
import { LOGIN_USER } from '../redux/type';
import { useSnackbar } from 'notistack';

function Home() {
    const { enqueueSnackbar } = useSnackbar();
    const { error, loginError } = useSelector((state) => state.common)
    const dispatch = useDispatch()
    const [searchInput, setSearchInput] = useState("")

    function handleSearch(e) {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        dispatch(searchMovie(searchInput))
    }, [searchInput])

    useEffect(() => {
        let userDataLogin = JSON.parse(localStorage.getItem("userlogin"))
        if (userDataLogin && userDataLogin.success) {
            dispatch({ type: LOGIN_USER, payload: userDataLogin })
        }
    }, [])

    useEffect(() => {
        if (error) {
            enqueueSnackbar('Movie Already Exits');
        }
    }, [error])

    useEffect(() => {
        if (loginError) {
            enqueueSnackbar('Enter Currect Login Data');
        }
    }, [loginError])



    return (
        <>
            <div className="row" style={{ marginTop: "0px" }}>
                <div className="col-3">
                    <h1 style={{ fontSize: "25px", fontWeight: "bold", marginTop: "37px", marginLeft: "30px", color: "#dedada" }}>MOVIE APP</h1>
                </div>
                <div className="col-6">
                    <div className="input" style={{ marginTop: "30px" }}>
                        <input placeholder='SEARCH MOVIE' value={searchInput} onChange={handleSearch} type="text" style={{ border: "0px", boxShadow: "2px 2px 3px 0px black", padding: "8px 200px 10px 8px ", borderRadius: "12px", opacity: "0.6px", marginLeft: "132px", backgroundColor: "rgb(29 28 28", color: "white" }} />
                        <SearchIcon style={{ marginLeft: "-27px", color: "gray" }} />
                    </div>
                </div>
                <div className="col-3">
                    <CustomModal />
                </div>
            </div >
            <hr style={{ margin: "20px 30px", color: "#dedada" }} />
            <MoviesGallery />
        </>
    )
}

export default Home