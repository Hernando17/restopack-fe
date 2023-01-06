import React from 'react';
import { Helmet } from "react-helmet";
import { SideBar, TopBar } from '../../../components';
import "../../../assets/css/dashboard.css";

export default function DashboardLayout({ children, title }) {
    return (
        <div className="flex bg-cream">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <SideBar />
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