import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export function DataTable({ columns, loading, data }) {
    return (
        <div style={{ backgroundColor: "white", height: 400, width: '100%' }}>
            <DataGrid
                loading={loading}
                color="primary"
                rows={data ? data.map((item, index) => (
                    {
                        id: index,
                        number: item.number,
                        isOrdered: item.isOrdered,
                    }
                )) : []}
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