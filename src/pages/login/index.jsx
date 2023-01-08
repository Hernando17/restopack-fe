import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from '../../components';
import { Button, Input } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLoginMutation } from '../../redux/services/authApi';
import { saveUser, userData } from '../../redux/features/userSlice';
import { saveToken } from '../../redux/features/tokenSlice';
import LoginCheck from '../../middlewares/preventLogin';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();

    const [login, result] = useLoginMutation();

    const loginAction = async (e) => {
        e.preventDefault();
        try {
            await login({
                email: emailRef.current.value,
                password: passwordRef.current.value
            }).then((res) => {
                dispatch(saveUser(res.data.user))
                dispatch(saveToken({
                    token: res.data.token,
                    refreshToken: res.data.refreshToken
                }))
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="flex bg-cream w-full h-[100vh] items-center justify-center">
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Login</title>
                </Helmet>
            </HelmetProvider>
            <Card>
                <div className="flex flex-row items-center justify-center">
                    <div className="w-[400px] px-12 py-16">
                        <h1 className="text-center font-bold text-2xl mb-10">Login</h1>
                        <form onSubmit={loginAction}>
                            <label htmlFor="email">Email</label>
                            <Input style={{ marginBottom: 14 }} placeholder="Input your email" name="email" inputRef={emailRef} fullWidth />
                            <label htmlFor="password" >Password</label>
                            <Input type="password" style={{ marginBottom: 14 }} placeholder="Input your password" name="password" inputRef={passwordRef} fullWidth />
                            <Button type="submit" variant='contained' style={{ width: "100%" }}>Login</Button>
                        </form>
                    </div>
                </div >
            </Card >
        </div >

    )
}