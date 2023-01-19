import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../redux/features/userSlice';
import { tokenData } from '../redux/features/tokenSlice';
import { Navigate, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function UserCheck({ children }) {

    const user = useSelector(userData);
    const token = useSelector(tokenData);
    const decoded = jwt_decode(token.token);
    const time = new Date().getTime() / 1000;

    if (!user.id && !token.token || decoded.exp < time) {
        return <Navigate to="/login" />
    }

    return children;

}