import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

// testing

function App() {
  const user = null;
  return (
    <div className="app">
        <div>Testing</div>
        <Routes>
          <Route path="/" 
          element={!user ? (<LoginScreen />) : (<HomeScreen />)} />
        </Routes>
    </div>
  );
}

export default App;
