import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Router } from '@tanstack/react-location';
import { location, routes } from './Router';

function App() {
  return (
    <Router routes={routes} location={location}>
      <Outlet />
    </Router>
  );
}

export default App;
