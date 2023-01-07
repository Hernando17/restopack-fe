import React from 'react';
import { Card } from '../../components';
import { Input } from '@mui/material';

export default function Login() {
    return (
        <div className="flex bg-cream w-full h-[100vh] items-center justify-center">
            <Card>
                <div className="flex flex-row items-center justify-center">
                    <div className="w-[400px] px-12 py-16">
                        <h1 className="text-center font-bold text-2xl mb-10">Login</h1>
                        <label for="email">Email</label>
                        <Input style={{ marginBottom: 14 }} name="email" fullWidth />
                        <label for="password">Password</label>
                        <Input type="password" name="password" fullWidth />
                    </div>
                </div >
            </Card >
        </div >
    )
}