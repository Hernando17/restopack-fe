import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: '#', flex: 1 },
    { field: 'firstName', headerName: 'Table', flex: 1 },
    { field: 'lastName', headerName: 'Waitress', flex: 1 },
    {
        field: 'age',
        headerName: 'Action',
        flex: 1
    },
];

const rows = [
    { id: 1, lastName: 'Snsssw', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export function DataTable() {
    return (
        <div style={{ backgroundColor: "white", height: 400, width: '100%' }}>
            <DataGrid
                color="primary"
                rows={rows}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[20]}
                components={{ Toolbar: GridToolbar }}
                componentsProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 }
                    }
                }}
            />
        </div>
    );
}