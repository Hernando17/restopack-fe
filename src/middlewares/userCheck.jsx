import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../redux/features/userSlice';
import { tokenData } from '../redux/features/tokenSlice';
import { Navigate, Route } from "react-router-dom";

export default function UserCheck({ children }) {

    const user = useSelector(userData);
    const token = useSelector(tokenData);

    if (!user.email && !token.token) {
        return <Navigate to="/login" />
    }

    return children;

}