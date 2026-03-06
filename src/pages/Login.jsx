// pages/Login.jsx
import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (username) {
      login(username);
      navigate('/dashboard');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField fullWidth label="Username" onChange={e => setUsername(e.target.value)} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;




















// import React from "react";
// import React, {useState} from "react";
// import {Button, TextField, Container, Typography} from '@mui/material';
// import {useNavigate} from 'react-router-dom'

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const navigate = useNavigate(); //This is a tool from react-router-dom that acts like a manual redirect. 

//     const handleLogin = () => {
//         if(username){
//             localStorage.setItem('user', username); // Saves "username" to the browser's storage
//             navigate('/dashboard'); // Sends the user to the /dashboard URL
//         }
//     };

//     return (
//         <Container maxWidth="sm" sx={{mt: 10}}>
//             <Typography variant='h4' gutterBottom>Login</Typography>
//             <TextField fullWidth label="Username" onChange={e => setUsername(e.target.value)} />
//             <Button variant="contained" sx={{mt: 2}} onClick={handleLogin}>Login</Button>
//         </Container>
//     )

// };
// export default Login;




// 3. The Template (The Return)

// This is the JSX that turns into the visual UI.

// <TextField ... onChange={e => setUsername(e.target.value)} />:

// Every time you type a letter (onChange), an event e is triggered.

// e.target.value is the current text in the box.

// We send that text to setUsername to update our "memory."

// <Button ... onClick={handleLogin}>:

// When clicked, it triggers the handleLogin logic we wrote above.

// Summary of the "Flow"

// User types → onChange fires → username state updates.

// User clicks → onClick fires → handleLogin runs.

// Validation → If username exists → Save to localStorage → Maps to Dashboard.