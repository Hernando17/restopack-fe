import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SideBar, TopBar } from '../../../components';
import "../../../assets/css/dashboard.css";
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../redux/features/userSlice';
import { clearToken } from '../../../redux/features/tokenSlice';

export default function DashboardLayout({ children, title }) {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(clearUser());
        dispatch(clearToken());
    }

    return (
        <div className="flex bg-cream">
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{title}</title>
                </Helmet>
            </HelmetProvider>

            <SideBar logout={logout} />
            <div className="flex flex-col flex-wrap w-full h-[100vh] overflow-auto">
                <TopBar />
                <div className="px-20 py-12">
                    <h1 className="font-bold text-[24px] mb-4">{title}</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}