import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>    
  </React.StrictMode>
);

