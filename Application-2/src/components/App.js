import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import useUsers from './useUsers';

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'username', headerName: 'User Name', width: 200 },
  { field: 'email', headerName: 'E-mail', width: 250 },
  { field: 'website', headerName: 'Website', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 400 }
];

const App = () => {
  const users = useUsers();
  return (
    <div style={{ height: '75%' }}>
      <h1> User Details </h1>
      <DataGrid rows={users} columns={columns} />
    </div>
  );
}

export default App;