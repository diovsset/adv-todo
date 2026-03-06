import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import BreadcrumbsNav from '../components/BreadcrumbsNav';
import { useAuth } from '../context/AuthContext';
 
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { logout } = useAuth();
  const rows = [
    { id: 1, task: 'Finish report', status: 'Done' },
    { id: 2, task: 'Update website', status: 'Pending' },
  ];
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'task', headerName: 'Task', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];

  return (
    <>
      <Navbar onMenuClick={() => setOpen(true)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <Box sx={{ p: 2 }}>
         <Typography variant="h4">Welcome, {user?.username}</Typography>
      <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
        <BreadcrumbsNav />
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5">Welcome Back!</Typography>
            <Typography variant="body1">Here are your tasks:</Typography>
          </CardContent>
        </Card>
        <DataGrid autoHeight rows={rows} columns={columns} pageSize={5} />
      </Box>
    </>
  );
};

export default Dashboard;





// const Dashboard = () => {
//   const [open, setOpen] = useState(false);
//   const [rows, setRows] = useState([]);

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'title', headerName: 'Task', width: 250 },
//     { field: 'completed', headerName: 'Status', width: 130, valueFormatter: (params) => params.value ? 'Done' : 'Pending' },
//   ];

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
//       .then(res => res.json())
//       .then(data => setRows(data))
//       .catch(error => console.error("Error loading tasks:", error));
//   }, []);

//   return (
//     <>
//       <Navbar onMenuClick={() => setOpen(true)} />
//       <Sidebar open={open} onClose={() => setOpen(false)} />
//       <Box sx={{ p: 2 }}>
//         <BreadcrumbsNav />
//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             <Typography variant="h5">Welcome Back!</Typography>
//             <Typography variant="body1">Here are your latest tasks from API:</Typography>
//           </CardContent>
//         </Card>
//         <DataGrid autoHeight rows={rows} columns={columns} pageSize={5} />
//       </Box>
//     </>
//   );
// };

// export default Dashboardz
