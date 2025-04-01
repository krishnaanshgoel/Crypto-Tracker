import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material";
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Coin from './pages/Coin';
import { Compare } from '@mui/icons-material';
import Watchlist from './pages/Watchlist';
import ComparePage from './pages/ComparePage';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/coin/:id" element={<Coin />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
      </BrowserRouter>

   </div>
  ); 
}

export default App;
