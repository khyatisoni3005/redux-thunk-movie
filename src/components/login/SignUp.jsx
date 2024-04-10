import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux'
import { signUp_user } from '../../redux/actions/authActions';
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
    height: 500,
    background: "gba( 255, 255, 255, 0.8 )",
    boxshadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur(13px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
};


function SignUp({ signUpOpen, signUpClose }) {

    const [open, setOpen] = React.useState(signUpOpen || false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userData, setUserData] = useState({})
    const dispatch = useDispatch()

    function signUp() {
        dispatch(signUp_user(userData))
        setOpen(false)
        setUserData({})
    }

    function handleUserData(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    useEffect(() => {

        if (signUpOpen) {
            setOpen(true);
        }

    }, [signUpOpen]);

    useEffect(() => {
        console.log('open', open)
        if (!open) {
            console.log('if !open');
            signUpClose()
        }
    }, [open])


    return (
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
                        Signup
                    </Typography>
                    <Typography style={{ textAlign: "center" }} id="modal-modal-description" sx={{ mt: 2 }}>

                        <input type="text" placeholder='enter name' name='name' onChange={handleUserData} style={{ padding: "10px 180px 10px 10px", backgroundColor: "rgb(52, 52, 52)", color: "gray", textTransform: "capitalize" }} autoComplete="off" /><br /><br />
                        <input type="text" placeholder='enter email' name='email' onChange={handleUserData} style={{ padding: "10px 180px 10px 10px", backgroundColor: "rgb(52, 52, 52)", color: "gray" }} autoComplete="off" /><br /><br />

                        <input type="password" placeholder='enter password' name='password' onChange={handleUserData} style={{ padding: "10px 180px 10px 10px", backgroundColor: "rgb(52, 52, 52)", color: "gray" }} autoComplete='new-password' /><br /><br />
                        <div className="row" style={{ marginTop: "-20px" }}>
                            <div className="col-7  ms-3" >
                                <Checkbox {...label} defaultChecked />

                                <span className='' style={{ fontSize: "13px" }}>Accept <span style={{ color: "skyblue" }}>Terms And Conditation</span></span>
                            </div>
                        </div>
                        <button onClick={signUp} style={{ padding: "8px 160px", marginTop: "20px", letterSpacing: "1px", color: "black" }}>
                            SignUp
                        </button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default SignUp