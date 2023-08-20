import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card, BasicTabs, InputBasic } from '../../components';
import { Button, Alert } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRegisterMutation } from '../../redux/services/authApi'
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [register, { isSuccess, error, isError }] = useRegisterMutation();

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [tabContent, setTabContent] = useState(0);

    const tab = [
        {
            text: "Restaurant",
        },
        {
            text: "Waitress"
        }
    ]

    function changeContent(data) {
        setTabContent(data)
    }

    async function registerAction(e) {
        e.preventDefault();
        try {
            await register({
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                confirm_password: confirmPasswordRef.current.value,
                isRestaurant: tabContent == 0 ? true : false
            }).unwrap().then((res) => {
                navigate("/login", { state: { message: res.message } });
            })
        } catch (err) {
            console.log(err)
        }
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log(tabContent)
    //     }, 1000)
    //     return () => clearInterval(interval)
    // })

    return (
        <div className="flex bg-darkBlue w-full h-screen items-center justify-center overflow-y-auto">
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>RestoPack | Register</title>
                </Helmet>
            </HelmetProvider>
            <Card>
                <div className="flex flex-row items-center justify-center">
                    <div className="w-[400px] px-12 py-16">
                        <h1 className="text-center font-bold text-2xl mb-10">Register</h1>
                        <BasicTabs tab={tab} tabcontent={tabContent} changeContent={changeContent}>
                        </BasicTabs>
                        {
                            tabContent == 0 ? (
                                <div>
                                    {
                                        isError ? (
                                            <Alert variant="filled" severity="error">
                                                {error.data.message}
                                            </Alert>
                                        ) : ('')
                                    }
                                    <form onSubmit={registerAction}>
                                        <label htmlFor="username">Username</label>
                                        <InputBasic type="text" style={{ marginBottom: 14 }} placeholder="Input your username" name="username" ref={usernameRef} fullWidth />
                                        <label htmlFor="email">Email</label>
                                        <InputBasic type="email" style={{ marginBottom: 14 }} placeholder="Input your email" name="email" ref={emailRef} fullWidth />
                                        <label htmlFor="password" >Password</label>
                                        <InputBasic type="password" style={{ marginBottom: 14 }} placeholder="Input your password" name="password" ref={passwordRef} fullWidth />
                                        <label htmlFor="confirm_password" >Confirm Password</label>
                                        <InputBasic type="password" style={{ marginBottom: 14 }} placeholder="Reinput your password" name="confirm_password" ref={confirmPasswordRef} fullWidth />
                                        <Button type="submit" variant='contained' style={{ width: "100%" }}>Register</Button>
                                        <p className="text-center mt-8">Have account already? <br></br><span><Link style={{ color: "blue" }} to='/login'>Login</Link></span></p>
                                    </form>
                                </div>
                            ) : (
                                <div>
                                    {
                                        isError ? (
                                            <Alert variant="filled" severity="error">
                                                {error.data.message}
                                            </Alert>
                                        ) : ('')
                                    }
                                    <form onSubmit={registerAction}>
                                        <label htmlFor="username">Username</label>
                                        <InputBasic type="text" style={{ marginBottom: 14 }} placeholder="Input your username" name="username" ref={usernameRef} fullWidth />
                                        <label htmlFor="email">Email</label>
                                        <InputBasic type="email" style={{ marginBottom: 14 }} placeholder="Input your email" name="email" ref={emailRef} fullWidth />
                                        <label htmlFor="password" >Password</label>
                                        <InputBasic type="password" style={{ marginBottom: 14 }} placeholder="Input your password" name="password" ref={passwordRef} fullWidth />
                                        <label htmlFor="confirm_password" >Confirm Password</label>
                                        <InputBasic type="password" style={{ marginBottom: 14 }} placeholder="Reinput your password" name="confirm_password" ref={confirmPasswordRef} fullWidth />
                                        <Button type="submit" variant='contained' style={{ width: "100%" }}>Register</Button>
                                        <p className="text-center mt-8">Have account already? <br></br><span><Link style={{ color: "blue" }} to='/login'>Login</Link></span></p>
                                    </form>
                                </div>
                            )
                        }

                    </div>
                </div >
            </Card >
        </div >
    )
}