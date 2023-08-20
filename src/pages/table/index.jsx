import React, { useEffect } from 'react';
import { BasicModal, DataTable } from '../../components';
import { DashboardLayout } from '../layout';
import { useGetAllTableQuery } from '../../redux/services/tableApi';
import { BasicButton } from '../../components/atoms/button/basicButton';
import { Button, Input, Alert, Snackbar } from '@mui/material';


export default function Table() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const closeModal = () => {
        setModalOpen(false);
    }

    const openModal = () => {
        setModalOpen(true);
    }

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
            <BasicModal open={modalOpen} closeModal={closeModal}>
                <label htmlFor="number">Number</label>
                <Input type="number" name="number" placeholder="Number" fullWidth />
            </BasicModal>
            <div className="flex flex-wrap justify-end w-full mb-2">
                <BasicButton text="+" bg="primary" onClick={openModal} />
            </div>
            <DataTable data={data} columns={columns} loading={isLoading} />
        </DashboardLayout>
    )
}