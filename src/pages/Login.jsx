// src/pages/Login.jsx
import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4">Login</Typography>
      <TextField fullWidth label="Email" onChange={e => setEmail(e.target.value)} />
      <TextField fullWidth label="Password" type="password" sx={{ mt: 2 }} onChange={e => setPassword(e.target.value)} />
      <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleEmailLogin}>Login</Button>
      <Button fullWidth variant="outlined" sx={{ mt: 2 }} onClick={handleGoogleLogin}>Login with Google</Button>
    </Container>
  );
};

export default Login;


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