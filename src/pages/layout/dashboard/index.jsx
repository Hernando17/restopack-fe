import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SideBar, TopBar } from '../../../components';
import "../../../assets/css/dashboard.css";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, userData } from '../../../redux/features/userSlice';
import { clearToken } from '../../../redux/features/tokenSlice';
import { useGetUserByIdQuery } from '../../../redux/services/authApi';

export default function DashboardLayout({ children, title }) {
    const dispatch = useDispatch();
    const userId = useSelector(userData);
    const { data: user, isLoading } = useGetUserByIdQuery({
        id: userId.id
    });

    function logout() {
        dispatch(clearUser());
        dispatch(clearToken());
    }

    if (isLoading) {
        return <div>Loading...</div>
    }


    return (
        <div className="flex bg-dark">
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{title}</title>
                </Helmet>
            </HelmetProvider>
            <SideBar />
            <div className="flex flex-col w-full">
                <TopBar logout={logout} name={user.name} />
                <div className="px-10 py-12 w-full h-screen overflow-auto bg-background">
                    <h1 className="font-bold text-[24px] mb-4">{title}</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}