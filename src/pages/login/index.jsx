import { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, InputBasic } from '../../components';
import { Button, Input, Alert, Snackbar } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLoginMutation } from '../../redux/services/authApi';
import { saveUser, userData } from '../../redux/features/userSlice';
import { saveToken } from '../../redux/features/tokenSlice';
import { Link, useLocation } from 'react-router-dom';

export default function Login() {
    const location = useLocation();
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();

    const [login, { isSuccess, isError, error }] = useLoginMutation();

    const loginAction = async (e) => {
        e.preventDefault();
        try {
            await login({
                email: emailRef.current.value,
                password: passwordRef.current.value
            }).unwrap()
                .then((res) => {
                    dispatch(saveUser({ id: res.user.id }))
                    dispatch(saveToken({
                        token: res.token,
                        refreshToken: res.refreshToken
                    }))
                })
        } catch (err) {
            console.log(err)
        }
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        if (location.state) {
            handleOpen()
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {

            console.log(emailRef.current.value, passwordRef.current.value)

        }, 1000)
        return () => clearInterval(interval)
    })

    return (

        <div className="flex bg-darkBlue w-full h-[100vh] items-center justify-center">
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>RestoPack | Login</title>
                </Helmet>
            </HelmetProvider>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {location.state ? location.state.message : ''}
                </Alert>
            </Snackbar>

            <Card>
                <div className="flex flex-row items-center justify-center">
                    <div className="w-[400px] px-12 py-16">
                        <h1 className="text-center font-bold text-2xl mb-10">Login</h1>
                        {
                            isError ? (
                                <Alert variant="filled" severity="error">
                                    {error.data.message}
                                </Alert>
                            ) : ('')
                        }
                        <form onSubmit={loginAction}>
                            <label htmlFor="email">Email</label>
                            <InputBasic type="email" style={{ marginBottom: 14 }} placeholder="Input your email" name="email" ref={emailRef} fullWidth />
                            <label htmlFor="password" >Password</label>
                            <InputBasic type="password" style={{ marginBottom: 14 }} placeholder="Input your password" name="password" ref={passwordRef} fullWidth />
                            <Button type="submit" variant='contained' style={{ width: "100%" }}>Login</Button>
                            <p className="text-center mt-8">Don't have account yet? <br></br><span><Link style={{ color: "blue" }} to='/register'>Register</Link></span></p>
                        </form>
                    </div>
                </div >
            </Card >
        </div >

    )
}