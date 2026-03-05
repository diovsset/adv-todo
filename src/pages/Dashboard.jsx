
import React, {useState} from 'react';
import {Card, CardContent, Typography, Box} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Navbar  from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import BreadcrumbsNav from '../components/BreadcrumbsNav';


const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const rows = [
    {id: 1, task: 'Finish report', status: 'Done'},
    {id: 2, task: 'Update website', status: 'Pending'}

  ];
  const columns = [
    {fieled: 'id', headerName: 'ID', width: 70},
    {fieled: 'id', headerName: 'Task', width: 200},
    {fieled: 'status', headerName: 'Status', width: 150}
  ]


  return (
    <>
      <Navbar onMenuClick={() => setOpen(true)}></Navbar>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <Box sx={{p:2}}>
        <BreadcrumbsNav />
        <Card sx={{mb: 3}}>
          <CardContent>
            <Typography variant="h5">Welcome Back!</Typography>
            <Typography variant="body1">Here are your tasks:</Typography>

          </CardContent>
        </Card>
        <DataGrid autoHeight rows={rows} columns={columns} pagSize={5} />
      </Box>
    </>
  );
};

export default Dashboard;
 