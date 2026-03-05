import React from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'   

const BreadcrumbsNav = () => (
    <Breadcrumbs sx={{my:2}}>
        <Link underline="hover" color="inherit" href="#">Home</Link>
        <Typography color="text.primary">Tasks</Typography>
    </Breadcrumbs>
);


export default BreadcrumbsNav;



//Distinguish the difference between the return html js to the fucntion some dont require 
// a return from the functions just like this example

//check if there are errors


