import React from 'react';
import { AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatePresence>
    <App />
    </AnimatePresence>
  </React.StrictMode>
);


