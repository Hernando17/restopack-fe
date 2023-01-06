import React from 'react';
import { Helmet } from "react-helmet";
import { SideBar } from '../../../components';
import "../../../assets/css/dashboard.css";

export default function DashboardLayout({ children, title }) {
    return (
        <div className="flex bg-cream">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <SideBar />
            <div className="flex flex-wrap w-full h-[100vh] bg-[#efef] overflow-auto">
                {children}
            </div>
        </div>
    )
}