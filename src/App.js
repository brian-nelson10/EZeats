import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
      <Router basename="/EZeats">
        <ScrollTop />
        <AnimatedRoutes className="overflow-hidden"/>
      </Router>
  );
}

export default App;
