import React from 'react';
import { DataTable } from '../../components';
import { DashboardLayout } from '../layout';
import { useGetAllTableQuery } from '../../redux/services/tableApi';

export default function Table() {
    const columns = [
        { field: 'id', headerName: '#', flex: 1 },
        { field: 'number', headerName: 'Number', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1
        },
    ];

    const { data, isLoading } = useGetAllTableQuery();

    if (!isLoading) {
        console.log(data)
    }

    return (
        <DashboardLayout title="RestoPack | Table" >
            <DataTable columns={columns} loading={true} />
        </DashboardLayout>
    )
}