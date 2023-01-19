import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../redux/features/userSlice';
import { tokenData } from '../redux/features/tokenSlice';
import { Navigate } from "react-router-dom";

export default function PreventLogin({ children }) {

    const user = useSelector(userData);
    const token = useSelector(tokenData);

    if (user.id && token.token) {
        return <Navigate to="/" />
    }

    return children;


}