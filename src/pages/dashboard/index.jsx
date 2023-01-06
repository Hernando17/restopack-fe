import React from 'react';
import { Card } from '../../components';
import { DashboardLayout } from '../layout';

export default function Dashboard() {
    return (
        <DashboardLayout title="Dashboard">
            <div className="flex gap-4">
                <Card>
                    <div className="px-5 py-3 min-w-[200px]">
                        <h1 className="text-lg">Order</h1>
                        <h5 className="text-[32px] font-semibold">10</h5>
                    </div>
                </Card>
                <Card>
                    <div className="px-5 py-3 min-w-[200px]">
                        <h1 className="text-lg">Active Waitress</h1>
                        <h5 className="text-[32px] font-semibold">20</h5>
                    </div>
                </Card>

            </div>
        </DashboardLayout>
    )
}