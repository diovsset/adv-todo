// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const navigate = useNavigate();

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find((u) => u.username === username);

    // Simple password check (no hashing) for this demo app. In production,
    // never store plain passwords in localStorage — use a backend and proper
    // hashing (bcrypt) instead. This keeps the app self-contained.
    if (foundUser && foundUser.password === password) {
      setUser({ username });
      localStorage.setItem('user', JSON.stringify({ username }));
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const signup = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existing = users.find((u) => u.username === username);
    if (existing) {
      alert('User already exists');
      return;
    }

    // Store user with plain password for the demo. See note above.
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    // Auto-login after signup
    login(username, password);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);