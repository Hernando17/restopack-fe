import React, { useEffect } from 'react';
import { DataTable } from '../../components';
import { DashboardLayout } from '../layout';
import { useGetAllTableQuery } from '../../redux/services/tableApi';
import { BasicButton } from '../../components/atoms/button/basicButton';

export default function Table() {

    const columns = [
        { field: 'id', headerName: '#', flex: 1 },
        { field: 'number', headerName: 'Number', flex: 1 },
        { field: 'isOrdered', headerName: 'isOrdered', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            renderCell: () => (
                <div>
                    <button>test</button>
                    <button>test</button>
                    <button>test</button>
                </div>
            )
        },
    ];

    const { data, isLoading } = useGetAllTableQuery();

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log(data);
    //     }, 1000)
    //     return () => clearInterval(interval)
    // })

    return (
        <DashboardLayout title="RestoPack | Table" >
            <div className="flex flex-wrap justify-end w-full mb-2">
                <BasicButton text="+" bg="primary" />
            </div>
            <DataTable data={data} columns={columns} loading={isLoading} />
        </DashboardLayout>
    )
}