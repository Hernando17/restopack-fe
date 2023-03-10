import React from 'react';
import { DataTable } from '../../components';
import { DashboardLayout } from '../layout';

export default function Order() {
    return (
        <DashboardLayout title="RestoPack | Order">
            <DataTable />
        </DashboardLayout>
    )
}