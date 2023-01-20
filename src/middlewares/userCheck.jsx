import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userData } from '../redux/features/userSlice';
import { tokenData } from '../redux/features/tokenSlice';
import { Navigate, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { clearToken } from '../redux/features/tokenSlice';

export default function UserCheck({ children }) {

    const user = useSelector(userData);
    const token = useSelector(tokenData);
    const time = new Date().getTime() / 1000;
    const dispatch = useDispatch();

    if (token.token) {
        const decoded = jwt_decode(token.token);
        if (!user.id && !token.token || decoded.exp < time) {
            dispatch(clearToken());
            return <Navigate to="/login" />
        }
    } else {
        return <Navigate to="/login" />
    }

    return children;

}