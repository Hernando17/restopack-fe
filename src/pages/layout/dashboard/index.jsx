import React from 'react';
import { Helmet } from "react-helmet";
import { SideBar } from '../../../components';

export default function DashboardLayout({ children, title }) {
    return (
        <div className="flex bg-cream">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <SideBar />
            <div className="flex flex-row">
                {children}
            </div>
        </div>
    )
}