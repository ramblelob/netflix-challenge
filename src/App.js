import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';


function App() {

  return (
    <div className="app">
        <Routes>
          <Route path="/" 
          element={<HomeScreen />} />
        </Routes>
    </div>
  );
}

export default App;
