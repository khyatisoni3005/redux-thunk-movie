import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getMovieData, searchMovie } from "../../redux/actions/MovieActions"
import { useDispatch, useSelector } from 'react-redux'
import { login_user } from '../../redux/actions/authActions';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: 400,
    background: "gba( 255, 255, 255, 0.8 )",
    boxshadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur(13px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
};
function LoginPage({ loginOpen, loginClose }) {


    const [open, setOpen] = React.useState(loginOpen || false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userData, setUserData] = useState({})
    const dispatch = useDispatch()


    function handleUserData(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    function loginUser() {
        if (userData.email == "" || userData.password == "") {
            return alert("enter data")
        } else {
            console.log(userData);
            dispatch(login_user(userData))
            setOpen(false)
            setUserData({})

        }

    }

    useEffect(() => {
        dispatch(getMovieData())
    }, [])

    useEffect(() => {
        if (loginOpen) {
            setOpen(true)
        }
    }, [loginOpen])

    useEffect(() => {
        if (!open) {
            loginClose()
        }
    }, [open])

    return (
        <>
            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        < AccountCircleIcon style={{ marginTop: "-100px", fontSize: "90px", marginLeft: "168px" }} />
                        <Typography style={{ color: "white", fontSize: "30px", textAlign: "center" }} id="modal-modal-title" variant="h6" component="h2">
                            LOGIN
                        </Typography>
                        <Typography style={{ textAlign: "center" }} id="modal-modal-description" sx={{ mt: 2 }}>

                            <input type="text" placeholder='enter email' name='email' onChange={handleUserData} style={{ padding: "10px 180px 10px 10px", backgroundColor: "rgb(52, 52, 52)", color: "gray", }} autoComplete="off" /><br /><br />
                            <input type="password" placeholder='enter password' name='password' onChange={handleUserData} style={{ padding: "10px 180px 10px 10px", backgroundColor: "rgb(52, 52, 52)", color: "gray", }} autoComplete='new-password' /><br /><br />
                            <div className="row" style={{ marginTop: "-20px" }}>
                                <div className="col-6  ms-3" >
                                    <Checkbox {...label} defaultChecked />

                                    <span className='' style={{ fontSize: "13px" }}>Remember Password</span>
                                </div>
                                <div className="col-5" style={{ marginTop: "13px" }}>
                                    <h6 style={{ fontSize: "13px" }}>Forget Password?</h6>
                                </div>
                            </div>
                            <button onClick={loginUser} style={{ padding: "8px 160px", marginTop: "20px", letterSpacing: "1px", color: "black" }}>
                                LogIn
                            </button>
                        </Typography>
                    </Box>
                </Modal>

            </div>
        </>
    )
}

export default LoginPage